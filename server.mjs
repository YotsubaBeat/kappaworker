import * as config from './wss.config.mjs';
import * as encodeURL from './respond.mjs';
import * as http from 'http';
import express from 'express';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
import * as expressWS from 'express-ws';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const filePath = path.join(__dirname+config.HTTP);
app.get('/', function(req, res) {
  res.sendFile(filePath);
});
app.listen(config.PORT, () => {
  console.log((new Date())+" | HTTP Server is listening on port "+config.PORT)
})
console.log((new Date())+" | Websocket Server is listening on port "+config.PORT)
expressWS.ws('/', function(ws, req) {
    ws.on('message', function(msg){
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
        socket.send(encodedWebSocket);
    });
});
