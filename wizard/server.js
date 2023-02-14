const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec, execSync, execFile, execFileSync, spawnSync } = require("child_process");
const blk = require('linux-blockutils');
const { networkInterfaces } = require('os');
const os = require('os');
var cron = require('node-cron');
const { default: axios } = require("axios");

const envFilePath = path.resolve(__dirname, ".env");
const peersJsonFilePath = path.resolve(__dirname, "peers.json");
const peersIpJsonFilePath = path.resolve(__dirname, "peersIp.json");

let countDown;




try {
  let wlanCheck = execSync('ip addr | grep wlan0', { encoding: 'utf8' });
  if(wlanCheck.includes("wlan0")){
    countDown = 60;
  }
}
catch (e) {
  countDown = 30;
}



setTimeout(() => {


if (!fs.existsSync(envFilePath)) {
  execSync('touch .env')
}

if (!fs.existsSync(peersJsonFilePath)) {
  execSync('touch peers.json')
}

if (!fs.existsSync(peersIpJsonFilePath)) {
  execSync('touch peersIp.json')
}

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json())



const readEnvVars = () => fs.readFileSync(envFilePath, "utf-8").split(os.EOL);

const getEnvValue = (key) => {
  const matchedLine = readEnvVars().find((line) => line.split("=")[0] === key);
  return matchedLine !== undefined ? matchedLine.split("=")[1] : null;
};


const setEnvValue = (key, value) => {
  const envVars = readEnvVars();
  const targetLine = envVars.find((line) => line.split("=")[0] === key);
  if (targetLine !== undefined) {
    const targetLineIndex = envVars.indexOf(targetLine);
    envVars.splice(targetLineIndex, 1, `${key}="${value}"`);
  } else {
    envVars.push(`${key}="${value}"`);
  }
  fs.writeFileSync(envFilePath, envVars.join(os.EOL));
};
function checkLocalIpAddress() {

  const nets = networkInterfaces();
  const results = {};



  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  if (results?.eth0?.length) {
    let envCheck = getEnvValue('REACT_APP_LOCAL_NODE_ETH_IP');
    if (envCheck) {
      envCheck = envCheck.replaceAll('"', '');
      console.log('last eth:' + envCheck);
    }
    setEnvValue('REACT_APP_LOCAL_NODE_ETH_IP', results.eth0[0]);
    console.log('current eth: ' + results.eth0[0]);
  }

  if (results?.wlan0?.length) {
    let envCheck = getEnvValue('REACT_APP_LOCAL_NODE_WIFI_IP')
    if (envCheck) {
      envCheck = envCheck.replaceAll('"', '');
      console.log('last wifi:' + envCheck)
    }
    setEnvValue('REACT_APP_LOCAL_NODE_WIFI_IP', results.wlan0[0]);
    console.log('current wifi: ' + results.wlan0[0]);

  }
}

checkLocalIpAddress();


function getAllowedDomains() {
  let allowedDomains = []
  let ethDomain = getEnvValue('REACT_APP_LOCAL_NODE_ETH_IP');
  let wifiDomain = getEnvValue('REACT_APP_LOCAL_NODE_WIFI_IP');
  ethDomain && allowedDomains.push('http://' + ethDomain.replaceAll('"', ''));
  wifiDomain && allowedDomains.push('http://' + wifiDomain.replaceAll('"', ''));

  return allowedDomains;
}


app.use((req, res, next) => {
  let allowedDomains = getAllowedDomains();
  const origin = req.headers.origin;
  const baseUrlCheck = req.originalUrl
  const hostHeader = req.headers.host;


  console.log("origin: " + origin)


  if (origin || (baseUrlCheck).includes("backup")) {
    if (allowedDomains.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
      checkLocalIpAddress();
      let allowedDomains = getAllowedDomains();
      if (allowedDomains.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  } else if (hostHeader && hostHeader.includes("revo.host")) {
    res.setHeader('Access-Control-Allow-Origin', hostHeader);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  }  else {
    res.status(404).send("Error: Route protected")
  }

  //res.header('Access-Control-Allow-Origin', `http://${domain}`); // update to match the domain you will make the request from

});


function authUser (user, pass) {
  let dashUser = getEnvValue('DASHBOARD_USER');
  let dashPass = getEnvValue('DASHBOARD_PASS');
  if ((dashUser && dashUser?.length > 2) && (dashPass && dashPass?.length > 2)) {
    dashUser = dashUser.replaceAll('"', '');
    dashPass = dashPass.replaceAll('"', '');
  }

  if (dashUser == user && dashPass == pass) {
    return true;
  } else if (dashUser !== user || dashPass !== pass) {
    return false;
  }
}

function checkUserCreated () {  
  let dashUser = getEnvValue('DASHBOARD_USER');
  let dashPass = getEnvValue('DASHBOARD_PASS');
  if ((dashUser && dashUser?.length > 2) && (dashPass && dashPass?.length > 2)) {
    return true;
  }else {
    return false;
  }
}

app.post('/api/getdomain', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let ethEnvCheck = getEnvValue('REACT_APP_LOCAL_NODE_ETH_IP');
  let wifiEnvCheck = getEnvValue('REACT_APP_LOCAL_NODE_WIFI_IP');
  let domainObj = {
    eth: "",
    wifi: ""
  };
  if (ethEnvCheck) {
    ethEnvCheck = ethEnvCheck.replaceAll('"', '');
    domainObj.eth = ethEnvCheck;
  }
  if (wifiEnvCheck) {
    wifiEnvCheck = wifiEnvCheck.replaceAll('"', '');
    domainObj.wifi = wifiEnvCheck;
  }
  res.send(domainObj);
})

app.post('/api/getwalletaddress', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  exec('cat master', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})


app.post('/api/login', (req, res) => {
  const { user, pass } = req.body;

  let dashUser = getEnvValue('DASHBOARD_USER');
  let dashPass = getEnvValue('DASHBOARD_PASS');
  if ((dashUser && dashUser?.length > 2) && (dashPass && dashPass?.length > 2)) {
    dashUser = dashUser.replaceAll('"', '');
    dashPass = dashPass.replaceAll('"', '');
  }

  if (dashUser == user && dashPass == pass) {
    res.send(true);
  } else if (dashUser !== user || dashPass !== pass) {
    res.send(false);
  }
})

app.post('/api/register', (req, res) => {
  const { user, pass, generatedUser, generatedPass } = req.body;
  
  let userIsCreated = checkUserCreated();
  let authResult;
  
  if(userIsCreated){
    authResult = authUser(generatedUser, generatedPass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }


  let dashUser = getEnvValue('DASHBOARD_USER');
  if (!dashUser || dashUser?.length <= 2) {
    setEnvValue('DASHBOARD_USER', user);
    setEnvValue('DASHBOARD_PASS', pass);
    res.send(true)
  } else {
    res.send(false);
  }
})

app.post('/api/modifyprofile', (req, res) => {
  const { user, pass, oldpass, generatedUser, generatedPass } = req.body;

  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(generatedUser, generatedPass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  if (user) {
    setEnvValue('DASHBOARD_USER', user);
    res.send(true)
  }
  if (pass) {
    let dashPass = getEnvValue('DASHBOARD_PASS');
    dashPass = dashPass.replaceAll('"', '');
    if (oldpass == dashPass) {
      setEnvValue('DASHBOARD_PASS', pass);
      res.send(true)
    } else {
      res.send('Wrong current Password!');
    }
  }
})

app.post('/api/checkuser', (req, res, next) => {  
  let dashUser = getEnvValue('DASHBOARD_USER');
  if (!dashUser || dashUser?.length <= 2) {
    res.send(false)
  } else {
    res.send(true);
  }
})

app.post('/api/checklocalip', (req, res, next) => {  
  checkLocalIpAddress();
  res.send('ok');
})

app.post('/api/forcereboot', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  res.send('done');
  execFile('bash', ['/home/revo/nodeutils', '-forcereboot'], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      (stdout);
    }
  });
})

app.post('/api/reboot', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }


  res.send('done');
  setTimeout(()=> {
    execFile('bash', ['/home/revo/nodeutils', '-reboot'], (err, stdout, stderr) => {
      if (err) {
        console.log("error: " + err);
      } else if(stderr){
        console.log("stderror: " + stderr)
      }
       else {
        (stdout);
      }
    });
  }, 1000)
})

app.post('/api/shutdown', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  res.send('done');
  setTimeout(() => {
    execFile('bash', ['/home/revo/nodeutils', '-shutdown'], (err, stdout, stderr) => {
      if (err) {
        console.log("error: " + err);
      }else if(stderr){
        console.log("stderror: " + stderr)
      } else {
        (stdout);
      }
    });
  }, 1000);
})


app.post('/api/checkmaster', (req, res, next) => {
  exec('ls', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.post('/api/getprivkey', (req, res, next) => {
  const { walletKey, user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  execFile('bash', ['/home/revo/nodeutils', '-walletunlock', walletKey], (errWalletUnlock, stdoutWalletUnlock, stderrWalletUnlock) => {
    if (errWalletUnlock) {
      res.status(404).send(errWalletUnlock);
    } else {
      execFile('bash', ['/home/revo/nodeutils', '-showmaster'], (errShowMaster, stdoutShowMaster, stderrShowMaster) => {
        if (errShowMaster) {
          res.status(404).send(errShowMaster);
        } else {
          console.log('ShowMaster: ' + stdoutShowMaster);
          execFile('bash', ['/home/revo/nodeutils', '-getprivkey', stdoutShowMaster], (errGetPrivKey, stdoutGetPrivKey, stderrGetPrivKey) => {
            if (errGetPrivKey) {
              res.status(404).send(errGetPrivKey);
            } else {
              console.log('PrivKey: ' + stdoutGetPrivKey);
              res.send(stdoutGetPrivKey);
            }
          });
        }
      });
    }
  });
})

app.post('/api/showdrives', function (req, res, next) {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  blk.getBlockInfo({}, function (err, json) {
    if (err) {
      console.log("Error:" + err);
      res.send('Error: ' + err);
    } else {
      res.send(JSON.stringify(json, null, "  "));
    }
  });
});


function checkFunction(disk, type) {
  let result = execFileSync('bash', ['/home/revo/nodeutils', type, disk], { encoding: 'utf8' })
  return result
}

app.post('/api/checkdrive', (req, res, next) => {
  const { disk1, disk2, user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }
  let response = [];
  if (!disk1 || !disk2) {
    res.status(404).send('You need at least 2 drives!');
  }

  resDisk1 = { disk1: checkFunction(disk1.NAME, '-checkdrive') };
  response.push(resDisk1);
  resDisk2 = { disk2: checkFunction(disk2.NAME, '-checkdrive') };
  response.push(resDisk2);
  res.send(response);

});

app.post('/api/checkfilesystem', (req, res, next) => {
  const { disk1, disk2, user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  let response = [];
  if (!disk1 || !disk2) {
    res.status(404).send('You need at least 2 drives!');
  }
  let resDisk1 = { disk1: checkFunction(disk1.NAME, '-checkfilesystem') };
  response.push(resDisk1);
  let resDisk2 = { disk2: checkFunction(disk2.NAME, '-checkfilesystem') };
  response.push(resDisk2);
  res.send(response);
});

app.post('/api/makearray', (req, res, next) => {
  const { disk1, disk2, raid, user, pass } = req.body;
  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  execFile('sudo', ['bash', '/home/revo/nodeutils', '-makearray', disk1, disk2, 'md0', raid], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
});

function getArrInfo(type) {  
  try {
    let result = execFileSync('bash', ['/home/revo/nodeutils', type, 'md0'], { encoding: 'utf8' });
    if (result.includes('md0')) {
      return execFileSync('bash', ['/home/revo/nodeutils', type, 'md0'], { encoding: 'utf8' });
    } else {
      return 'Error: array not found'
    }
  } catch (error) {
    return error.stdout.toString();
  }
}

app.post('/api/getarrayinfo', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let arrStatus = getArrInfo('-arraystatus');
  let arrDetails;
  let arrUsage;
  let response
  if (arrStatus?.includes('md0')) {
    arrDetails = getArrInfo('-arraydetails');
    arrUsage = getArrInfo('-arrayusage');
    response = {
      arrayDetails: arrDetails,
      arrayStatus: arrStatus,
      arrayUsage: arrUsage
    }
  } else {
    response = {
      arrayStatus: 'Error: array not found'
    }
  }

  res.send(response)
})

app.post('/api/wifiscan', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  execFile('bash', ['/home/revo/nodeutils', '-wifiscan'], (err, stdout, stderr) => {
    if (err) {
      res.send('Error: wifi networks not found');
    } else {
      res.send(stdout);
    }
  });
})

app.post('/api/genwificonfig', (req, res, next) => {
  const { essid, pass, country, user, userPass } = req.body;

  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, userPass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  execFile('bash', ['/home/revo/nodeutils', '-genwificonfig', essid, pass, country], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.post('/api/removearray', (req, res, next) => {
  const { disk1, disk2, user, pass } = req.body;
  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }


  execFile('bash', ['/home/revo/nodeutils', '-removearray', disk1, disk2, 'md0'], (err, stdout, stderr) => {
    const { user, pass } = req.body;
    let userIsCreated = checkUserCreated();
    let authResult;
  
    
    if(userIsCreated){
      authResult = authUser(user, pass);
    }
    if(userIsCreated && !authResult){
      return res.status(404).send("Error: Route protected")
    }
  
    
    if (err) {
      console.log(err)
      res.status(404).send(err);
    } else {
      console.log(stdout)
      res.send(stdout);
    }
  });
})

function globalFunction(type) {
  let message;
  if (type == '-delwificonfig' || type == '-getwificonfig') {
    message = 'Error: Wifi config file not found';
  } else if (type == '-delrevoconf' || type == '-getrevoconf') {
    message = 'Error: Revo rpc config file not found';
  } else if (type == '-stopdaemon' || type == '-startdaemon') {
    message = 'Daemon error on start/stop'
  }
  try {
    return execFileSync('bash', ['/home/revo/nodeutils', type], { encoding: 'utf8' });
  } catch (error) {
    return message
  }

}
app.post('/api/delwificonfig', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let response = globalFunction('-delwificonfig');
  res.send(response);
})

app.post('/api/getwificonfig', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let response = globalFunction('-getwificonfig');
  res.send(response);
})

app.post('/api/genrevoconfig', (req, res, next) => {
  const { rpcUser, rpcPass, nodeName, user, pass } = req.body;

  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  execFile('bash', ['/home/revo/nodeutils', '-genrevoconf', rpcUser, rpcPass, nodeName], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.post('/api/delrevoconfig', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let response = globalFunction('-delrevoconf');
  res.send(response);
})

app.post('/api/getrevoconfig', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let response = globalFunction('-getrevoconf');
  res.send(response);
})

app.post('/api/startdaemon', (req, res, next) => {
  let response = globalFunction('-startdaemon');
  res.send(response);
})

app.post('/api/stopdaemon', (req, res, next) => {
  let response = globalFunction('-stopdaemon');
  res.send(response);
})

app.post('/api/createwallet', (req, res, next) => {
  const { walletName, walletPass, user, pass } = req.body;
  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  execFile('bash', ['/home/revo/nodeutils', '-createwallet', walletName, walletPass], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})


function globalDashboardFunction(type) {/*
  let message;
  if (type == '-delwificonfig' || type == '-getwificonfig') {
    message = 'Error: Wifi config file not found';
  } else if (type == '-delrevoconf' || type == '-getrevoconf') {
    message = 'Error: Revo rpc config file not found';
  } else if (type == '-stopdaemon' || type == '-startdaemon') {
    message = 'Daemon error on start/stop'
  }*/
  if (type == '-getblockcount') {
    let getBlockCountResponse = execFileSync('bash', ['/home/revo/nodeutils', '-getblockcount'], { encoding: 'utf8' });
    let getBlockHash = execFileSync('bash', ['/home/revo/nodeutils', '-getblockhash', getBlockCountResponse], { encoding: 'utf8' });
    let getBlock = execFileSync('bash', ['/home/revo/nodeutils', '-getblock', getBlockHash], { encoding: 'utf8' });
    getBlock = getBlock.replaceAll("\\", "").replaceAll("\n", "").replaceAll('\"', '"').replaceAll('"\\', '"').replaceAll("-of-", "_of_");
    getBlock = JSON.parse(getBlock)
    getBlock.time = Math.floor(Date.now() / 1000) - getBlock.time;
    getBlock = JSON.stringify(getBlock);
    return getBlock;
  }
  try {
    return execFileSync('bash', ['/home/revo/nodeutils', type], { encoding: 'utf8' });
  } catch (error) {
    return error
  }

}


app.post('/api/getlastestblocks', async (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let blocks = [];
  let getBlockCountResponse = execFileSync('bash', ['/home/revo/nodeutils', '-getblockcount'], { encoding: 'utf8' });
  let getBlockHash = execFileSync('bash', ['/home/revo/nodeutils', '-getblockhash', getBlockCountResponse], { encoding: 'utf8' });
  let getBlock = execFileSync('bash', ['/home/revo/nodeutils', '-getblock', getBlockHash], { encoding: 'utf8' });
  getBlock = getBlock.replaceAll("\\", "").replaceAll("\n", "").replaceAll('\"', '"').replaceAll('"\\', '"').replaceAll("-of-", "_of_");
  getBlock = JSON.parse(getBlock)
  getBlock.time = Math.floor(Date.now() / 1000) - getBlock.time;
  blocks.push(getBlock);
  for (let i = 0; i < 30; i++) {
    let currentBlock = execFileSync('bash', ['/home/revo/nodeutils', '-getblock', blocks[i].previousblockhash], { encoding: 'utf8' });
    currentBlock = currentBlock.replaceAll("\\", "").replaceAll("\n", "").replaceAll('\"', '"').replaceAll('"\\', '"').replaceAll("-of-", "_of_");
    currentBlock = JSON.parse(currentBlock);
    currentBlock.time = Math.floor(Date.now() / 1000) - currentBlock.time;
    blocks.push(currentBlock);
  }
  //console.log(blocks);
  res.send(blocks);
})

app.post('/api/getdashboarddata', async (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  const types = ['-getinfo', '-getnettotals', '-listbanned', '-getmempoolinfo', '-getnetworkinfo', '-uptime', 'date', '-getblockchaininfo', '-gettotalsize', '-getwalletinfo', '-getblockcount'];
  let response = [];
  for (let i = 0; i < types.length; i++) {
    let data;
    if (types[i] == "date") {
      data = execSync('date', { encoding: 'utf8' });
    } else {
      data = await globalDashboardFunction(types[i]);
    }
    let result
    if (typeof (data) == "string" && types[i] !== "date" && i !== (types.length - 3)) {
      result = ((data).replaceAll("\\", "")).replaceAll("\n", "").replaceAll('\"', '"').replaceAll('"\\', '"').replaceAll("-of-", "_of_");
      result = JSON.parse(result);
    } else {
      result = data
    }
    response.push(result);
  }
  if(response[0].chain == "test"){
    response.push({
       API_URL: "https://testnetapi.revo.network/",
       EXPLORER_URL: "https://testnet.revo.network/"
   })
  }
  else {
    response.push({
      API_URL: "https://api.revo.network/",
      EXPLORER_URL: "https://mainnet.revo.network/"
})
  }
  res.send(response);
});

function checkPeersData() {
  let peersData = execFileSync('bash', ['/home/revo/nodeutils', '-getpeers'], { encoding: 'utf8' });
  peersData = ((peersData).replaceAll("\\", "")).replaceAll("\n", "").replaceAll('\"', '"').replaceAll('"\\', '"').replaceAll("-of-", "_of_");
  if (peersData.length > 0) {
    peersData = JSON.parse(peersData);
  }

  let peersJsonFileData = fs.readFileSync('peers.json');
  if (peersJsonFileData.length) {
    peersJsonFileData = JSON.parse(peersJsonFileData);
  }

  for (let i = 0; i < peersData.length; i++) {
    const currentPeer = peersJsonFileData.find(d => d.id == peersData[i].id);
    if ((peersData.length !== peersJsonFileData.length) || (currentPeer == undefined) || ((currentPeer.addr).split(":")[0] !== (peersData[i].addr).split(":")[0])) {

      Promise.all(peersData.map((e, j) => {
        let currentIp;
        if ((e.addr).split(".").length < 4) {
          result = execSync(`dig ${e.addr} +short`, { encoding: 'utf8' });
          currentIp = { query: result.replaceAll("\n", "") };
        } else if ((e.network == 'not_publicly_routable')) {
          result = execSync(`dig TXT +short o-o.myaddr.l.google.com @ns1.google.com`, { encoding: 'utf8' });
          currentIp = { query: result.replaceAll("\n", "").replaceAll('"', '') };
        } else {
          currentIp = { query: (e.addr).split(":")[0] };
        }

        return axios.get(`https://api.findip.net/${currentIp.query}/?token=5daf21526edd4cbf99b0e98b0e522c5a`);
      })
      )
        .then(axiosResults => {
          let peersIpData = [];
          axiosResults.map((result, pos) => {
            if (result?.data) {
              let resultObj = result?.data;
              peersIpData.push({ ...resultObj, addr: peersData[pos].addr })
            }
          })
          peersIpData = JSON.stringify(peersIpData);
          fs.writeFileSync('peersIp.json', peersIpData);
          peersData = JSON.stringify(peersData)
          fs.writeFileSync('peers.json', peersData);
        })
        .catch(err => {
          console.log(err);
          return 'Error: api couldnt find ip location'
        });
      break;
    } else {
    }
  }
}



exec('ls', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
  if (err) {
  } else {
    if (stdout.includes("master")) {
      checkPeersData();
    }
  }
});



cron.schedule("*/60 * * * * *", function () {

  exec('ls', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
    if (err) {
    } else {
      if (stdout.includes("master")) {
        checkPeersData();
      }
    }
  });
});


app.post('/api/getpeers', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let peersJsonFileData = fs.readFileSync('peers.json');
  peersJsonFileData = JSON.parse(peersJsonFileData);
  res.send(peersJsonFileData);
})

app.post('/api/getpeersip', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let peersIpJsonFileData = fs.readFileSync('peersIp.json');
  peersIpJsonFileData = JSON.parse(peersIpJsonFileData);
  res.send(peersIpJsonFileData);
})


app.post('/api/checktokenmail', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let envToken = getEnvValue('EMAIL_TOKEN');
  if (envToken) {
    envToken = envToken.replaceAll('"', '');
  }
  if (envToken == 'sent') {
    return res.send('The mail has already been sent.');
  } else {
    res.send("the mail has not been sent yet");
  }
})


app.post('/api/sendtokenmail', async (req, res, next) => {
  const { email, token, user, pass } = req.body;
  let master;

  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  if (!email || !token) {
    return res.status(404).send('Error: Email or Token not found');
  }
  let envToken = getEnvValue('EMAIL_TOKEN');
  if (envToken) {
    envToken = envToken.replaceAll('"', '');
  }
  if (envToken == 'sent') {
    return res.send('The mail has already been sent.');
  }

  master = execSync('cat /home/revo/master', { encoding: 'utf8' });


  const emailResponse = await axios.post(`https://enrollment.revo.network/index.php?username=${email}&master=${master.slice(0, master.length - 1)}&token=${token}`);
  if (emailResponse.data == 'OK') {
    setEnvValue('EMAIL_TOKEN', 'sent');
  }
  res.send(emailResponse.data);
})

app.get('/api/backup.dat', (req, res) => {    
  exec('ls', { cwd: '/home/revo/revonode-frontend/wizard' }, (err, stdout, stderr) => {
    if (err) {
    } else {
      if (stdout.includes("backup.dat")) {
        var filePath = path.join(__dirname, 'backup.dat');
        var stat = fs.statSync(filePath);
      
        res.writeHead(200, {
          'Content-Type': 'application/dat',
          'Content-Length': stat.size
        });
      
        var readStream = fs.createReadStream(filePath);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res);
      }else {
        res.send('File not found.');
      }
    }
  });


}
)

app.post('/api/backupwallet', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  exec('ls', { cwd: '/home/revo/revonode-frontend/wizard' }, (err, stdout, stderr) => {
    if (err) {
    } else {
      if (stdout.includes("backup.dat")) {
        return res.send('ok');
      } else {
        execFileSync('bash', ['/home/revo/nodeutils', '-backupwallet'], { encoding: 'utf8' });

        exec('ls', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
          if (err) {
          } else {
            if (stdout.includes("backup.dat")) {

              exec('sudo mv /home/revo/backup.dat /home/revo/revonode-frontend/wizard', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
                if (err) {
                } else {
                  res.send('ok');
                  setTimeout(() => {
                    exec('rm -r backup.dat', { cwd: '/home/revo/revonode-frontend/wizard' }, (err, stdout, stderr) => {
                      if (err) {
                      } else {
                      }
                    });

                  }, 120000);
                }
              });

            }
          }
        });
      }
    }
  });
})


app.post('/api/updates', async (req, res, next) => {
  const { type, user, pass } = req.body;

  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  res.send("ok");

  if(type == "dashboard"){
    execFileSync('bash', ['/home/revo/nodeutils', '-dashupgrade'], { encoding: 'utf8' });
  }else if(type == "node"){    
    execFileSync('bash', ['/home/revo/nodeutils', '-nodeupgrade'], { encoding: 'utf8' });
  }

})

app.post('/api/listunspent', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
      execFile('bash', ['/home/revo/nodeutils', '-showmaster'], (errShowMaster, stdoutShowMaster, stderrShowMaster) => {
        if (errShowMaster) {
          res.status(404).send(errShowMaster);
        } else {
          //let result = execFileSync('bash', ['/home/revo/nodeutils', '-listunspent', stdoutShowMaster.slice(0, stdoutShowMaster.length - 1 )], { encoding: 'utf8' });
          let result = spawnSync('bash', ['/home/revo/nodeutils', '-listunspent', stdoutShowMaster.slice(0, stdoutShowMaster.length - 1 )], { encoding: 'utf8' });    
          let outtext = result.output[1]
          let outputresult = outtext.replaceAll("\n", "");
          res.send(outputresult);        
        }
      });    
})


app.post('/api/listtransactions', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
      execFile('bash', ['/home/revo/nodeutils', '-showmaster'], (errShowMaster, stdoutShowMaster, stderrShowMaster) => {
        if (errShowMaster) {
          res.status(404).send(errShowMaster);
        } else {
          //let result = execFileSync('bash', ['/home/revo/nodeutils', '-listunspent', stdoutShowMaster.slice(0, stdoutShowMaster.length - 1 )], { encoding: 'utf8' });
          let result = spawnSync('bash', ['/home/revo/nodeutils', '-listtransactions'], { encoding: 'utf8' });    
          let outtext = result.output[1]
          let outputresult = outtext.replaceAll("\n", "");
          res.send(outputresult);        
        }
      });    
})

app.post('/api/showpublicip', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
      let result = spawnSync('bash', ['/home/revo/nodeutils', '-showpublicip'], { encoding: 'utf8' });    
      let outtext = result.output[1]
      let outputresult = outtext.replaceAll("\n", "");
      res.send(outputresult);     
})


app.post('/api/getstakinginfo', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let response = execFileSync('bash', ['/home/revo/nodeutils', '-getstakinginfo'], { encoding: 'utf8' });
  response = response.replaceAll("\n", "");
  res.send(response);
})

app.post('/api/walletunlockforstaking', async (req, res, next) => {
  const { walletPassword, user, pass } = req.body;

  
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  if(walletPassword){
    execFile('bash', ['/home/revo/nodeutils', '-walletunlockforstaking', walletPassword], (errShowMaster, stdoutShowMaster, stderrShowMaster) => {
      if (errShowMaster) {
        res.send("The wallet password entered was incorrect.");
      } else {
        execFileSync('bash', ['/home/revo/nodeutils', '-enablestaking', "true"], { encoding: 'utf8' });
        res.send("ok");        
      }
    });    
  }else {
    res.send("Invalid Password");
  }

})


app.post('/api/walletlockforstaking', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  execFileSync('bash', ['/home/revo/nodeutils', '-walletlock'], { encoding: 'utf8' });
  execFileSync('bash', ['/home/revo/nodeutils', '-enablestaking', "false"], { encoding: 'utf8' });
  res.send("Staking disabled successfully");
})


app.post('/api/getver', (req, res, next) => {
  const { user, pass } = req.body;
  let userIsCreated = checkUserCreated();
  let authResult;

  
  if(userIsCreated){
    authResult = authUser(user, pass);
  }
  if(userIsCreated && !authResult){
    return res.status(404).send("Error: Route protected")
  }

  
  let result = execFileSync('bash', ['/home/revo/nodeutils', '-v'], { encoding: 'utf8' });  
  res.send(result);
})


app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})


}, countDown * 1000)