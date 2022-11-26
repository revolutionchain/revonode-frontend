const express = require("express");
const path = require("path");
const fs = require("fs");
const { default: axios } = require("axios");
const { execFile } = require("child_process");
const blk = require('linux-blockutils');
const { resolveAny } = require("dns");



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


function checkFunction(sdx, type) {
  execFile('bash', ['/home/revo/nodeutils', type, sdx], (err, stdout, stderr) => {
    if (err) {
      return (err);
    } else {
      return (stdout);
    }
  });
}

app.post('/checkdrive', (req, res, next) => {
  const { disk1, disk2 } = req.body;
  let res = [];
  if (!disk1 || !disk2) {
    res.status(404).send('You need at least 2 drives!');
  }
  resDisk1 = { disk1: checkFunction(disk1, '-checkdrive') };
  res.push(resDisk1);
  resDisk2 = { disk2: checkFunction(disk2, '-checkdrive') };
  res.push(resDisk2);
  res.send(res);

});

app.post('/checkfilesystem', (req, res, next) => {
  const { disk1, disk2 } = req.body;
  let res = [];
  if (!disk1 || !disk2) {
    res.status(404).send('You need at least 2 drives!');
  }
  let resDisk1 = { disk1: checkFunction(disk1, '-checkfilesystem') };
  res.push(resDisk1);
  let resDisk2 = { disk2: checkFunction(disk2, '-checkfilesystem') };
  res.push(resDisk2);
  res.send(res);
});

app.post('/makearray', (req, res, next) => {
  const { disk1, disk2, raid } = req.body;
  execFile('bash', ['/home/revo/nodeutils', '-makearray', disk1, disk2, 'md0', raid], (err, stdout, stderr) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(stdout);
    }
  });
  
});






const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})