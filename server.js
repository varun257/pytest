const http = require('http');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const express = require('express')
const app = express()
const exec = require('child_process').exec;

app.use(express.static(__dirname + '/dist/pytest'));

app.get('/pytest/run', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const child = exec('ls -l', (error, stdout) => {
        console.log(stdout);
        setTimeout(function() {
            res.send({status: 'running'});
        }, 3000);
    });
});

app.get('/pytest', (req, res) => {
    console.log(__dirname);

    res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});