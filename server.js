const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });
const httpserver = http.createServer(app);
const port = process.env.PORT;
const wsServer = new WebSocket.Server({ server: httpserver });
httpserver.listen(port);
console.debug('Server listening on port ' + port);
