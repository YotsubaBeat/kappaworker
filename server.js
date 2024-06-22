const ws = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
const server = http.createServer(app);
const port = process.env.PORT;
const wsServer = new WebSocketServer({ port: process.env.PORT });
server.listen(port);
console.debug('Server listening on port ' + port);
