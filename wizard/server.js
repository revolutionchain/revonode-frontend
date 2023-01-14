const express = require("express");
const path = require("path");
const fs = require("fs");
const { exec, execSync, execFile, execFileSync } = require("child_process");
const blk = require('linux-blockutils');
const { networkInterfaces } = require('os');
const os = require('os');

const envFilePath = path.resolve(__dirname, ".env");


if(!fs.existsSync(envFilePath)){
  execSync('touch .env')
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


function getAllowedDomains () {
  let allowedDomains = []
  let ethDomain = getEnvValue('REACT_APP_LOCAL_NODE_ETH_IP');
  let wifiDomain = getEnvValue('REACT_APP_LOCAL_NODE_WIFI_IP');
  ethDomain && allowedDomains.push('http://' + ethDomain.replaceAll('"', ''));
  wifiDomain && allowedDomains.push('http://' + wifiDomain.replaceAll('"', ''));

  return allowedDomains;
}


app.use((req, res, next) => {
  let allowedDomains = getAllowedDomains();
  console.log('allowedDomains: ' + allowedDomains);
  const origin = req.headers.origin;
  if (allowedDomains.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }else {
    checkLocalIpAddress();    
    let allowedDomains = getAllowedDomains();
    if (allowedDomains.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  }

  //res.header('Access-Control-Allow-Origin', `http://${domain}`); // update to match the domain you will make the request from

  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


app.get('/getwalletaddress', (req, res, next) => {
  exec('cat master', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})


app.post('/login', (req,res) => {  
  const { user, pass } = req.body;
  console.log(req.body);
  
    console.log('Body user: ' + user + ' Body pass: ' + pass);
  let dashUser = getEnvValue('DASHBOARD_USER');
  let dashPass = getEnvValue('DASHBOARD_PASS');
  if ((dashUser && dashUser?.length > 2) && (dashPass && dashPass?.length > 2)) {
    dashUser = dashUser.replaceAll('"', '');
    dashPass = dashPass.replaceAll('"', '');
  }

  console.log('user: ' + dashUser + ' pass: ' + dashPass);
  if(dashUser == user && dashPass == pass){    
    res.send(true);
  }else if(dashUser !== user || dashPass !== pass){
    res.send(false);
  }
})

app.post('/register', (req,res) => {  
  const { user, pass } = req.body;
  let dashUser = getEnvValue('DASHBOARD_USER');
  if (!dashUser || dashUser?.length <= 2) {
    setEnvValue('DASHBOARD_USER', user);
    setEnvValue('DASHBOARD_PASS', pass);
    res.send(true)
  }else {
    res.send(false);
  }
})


app.get('/checkuser', (req, res, next) => {
  let dashUser = getEnvValue('DASHBOARD_USER');
  if (!dashUser || dashUser?.length <= 2) {
    res.send(false)
  }else {
    res.send(true);
  }
})

app.get('/checklocalip', (req, res, next) => {
  checkLocalIpAddress();
  res.send('ok');
})

app.get('/forcereboot', (req, res, next) => {
  res.send('done');
  execFile('bash', ['/home/revo/nodeutils', '-forcereboot'], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      (stdout);
    }
  });
})


app.get('/checkmaster', (req, res, next) => {
  exec('ls', { cwd: '/home/revo/' }, (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.post('/getprivkey', (req, res, next) => {
  const { walletKey } = req.body;  
  execFile('bash', ['/home/revo/nodeutils', '-walletunlock', walletKey], (errWalletUnlock, stdoutWalletUnlock, stderrWalletUnlock) => {
    if (errWalletUnlock) {
      res.status(404).send(errWalletUnlock);
    } else {
      execFile('bash', ['/home/revo/nodeutils', '-showmaster'], (errShowMaster, stdoutShowMaster, stderrShowMaster) => {
        if (errShowMaster) {
          res.status(404).send(errShowMaster);
        } else {
          console.log( 'ShowMaster: ' + stdoutShowMaster);
          execFile('bash', ['/home/revo/nodeutils', '-getprivkey', stdoutShowMaster], (errGetPrivKey, stdoutGetPrivKey, stderrGetPrivKey) => {
            if (errGetPrivKey) {
              res.status(404).send(errGetPrivKey);
            } else {
              console.log( 'PrivKey: ' + stdoutGetPrivKey);
              res.send(stdoutGetPrivKey);
            }
          });
        }
      });
    }
  });
})

app.get('/showdrives', function (req, res, next) {
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

app.post('/checkdrive', (req, res, next) => {
  const { disk1, disk2 } = req.body;
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

app.post('/checkfilesystem', (req, res, next) => {
  const { disk1, disk2 } = req.body;
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

app.post('/makearray', (req, res, next) => {
  const { disk1, disk2, raid } = req.body;
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

app.get('/getarrayinfo', (req, res, next) => {
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

app.get('/wifiscan', (req, res, next) => {
  execFile('bash', ['/home/revo/nodeutils', '-wifiscan'], (err, stdout, stderr) => {
    if (err) {
      res.send('Error: wifi networks not found');
    } else {
      res.send(stdout);
    }
  });
})

app.post('/genwificonfig', (req, res, next) => {
  const { essid, pass, country } = req.body;
  execFile('bash', ['/home/revo/nodeutils', '-genwificonfig', essid, pass, country], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.post('/removearray', (req, res, next) => {
  const { disk1, disk2 } = req.body;
  execFile('bash', ['/home/revo/nodeutils', '-removearray', disk1, disk2, 'md0'], (err, stdout, stderr) => {
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
app.get('/delwificonfig', (req, res, next) => {
  let response = globalFunction('-delwificonfig');
  res.send(response);
})

app.get('/getwificonfig', (req, res, next) => {
  let response = globalFunction('-getwificonfig');
  res.send(response);
})

app.post('/genrevoconfig', (req, res, next) => {
  const { rpcUser, rpcPass, nodeName } = req.body;
  execFile('bash', ['/home/revo/nodeutils', '-genrevoconf', rpcUser, rpcPass, nodeName], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
})

app.get('/delrevoconfig', (req, res, next) => {
  let response = globalFunction('-delrevoconf');
  res.send(response);
})

app.get('/getrevoconfig', (req, res, next) => {
  let response = globalFunction('-getrevoconf');
  res.send(response);
})

app.get('/startdaemon', (req, res, next) => {
  let response = globalFunction('-startdaemon');
  res.send(response);
})

app.get('/stopdaemon', (req, res, next) => {
  let response = globalFunction('-stopdaemon');
  res.send(response);
})

app.post('/createwallet', (req, res, next) => {
  const { walletName, walletPass } = req.body;
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
  try {
    return execFileSync('bash', ['/home/revo/nodeutils', type], { encoding: 'utf8' });
  } catch (error) {
    return error
  }

}


app.get('/getdashboarddata', async (req, res, next) => {
  const types = ['-getinfo', '-getnettotals', '-listbanned', '-getmempoolinfo', '-getnetworkinfo', '-uptime', '-getblockchaininfo', '-getpeer'];
  let response = [];
  for(let i = 0 ; i < types.length ; i ++){
    let data = await globalDashboardFunction(types[i]);
    let result
    if(typeof(data) == "string"){
      result = ((data).replaceAll("\\", "")).replaceAll("\n","");
    }else {
      result = data
    }
    response.push(result);
  }
  console.log(response);
  res.send(response);
})



app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
