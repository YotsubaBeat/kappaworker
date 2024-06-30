const encodeURL = import('./respond.mjs');
const http = require('http');
const express = require('express');
const path = require('path');
const url = require('url');
const fs = require('fs');
const ws = require('ws');
const app = express();
const expressWs = require('express-ws')(app);
import('./wss.config.mjs').then(({ HTTP, PORT }) => {
  let filePath = path.join(__dirname+HTTP);
  app.listen(PORT, () => {
    console.log((new Date())+" | Server is listening on port "+PORT)
  });
  app.use('/', function(req, res) {
    res.sendFile(filePath);
  });
  app.get('/', function(req, res) {
    res.sendFile(filePath);
  });
  app.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        // Logs input received from client
        console.log((new Date())+" | Received input from client: ["+msg+"]");
        // Converts input to a working URL
        if (!isUrl(msg)) {
          let encodedWebSocket = 'https://www.google.com/search?q=' + msg;
        } else if (isUrl(msg)) { 
          let encodedWebSocket = 'https://' + msg;
        }
        function isUrl(val = val.trim()) {
          if (/^http(s?):\/\//.test(val) || val.includes('.')) 
            return true || false;
        };
        // Exports the encoded websocket as a module
        // Sends the final product back to the client once it has finished
        ws.send(msg);
    });
  });
});