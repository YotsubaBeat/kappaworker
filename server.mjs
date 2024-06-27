import * as encodeURL from './respond.mjs';
import { WebSocketServer } from 'ws';
import * as http from 'http';
import express from 'express';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
import * as phpnode from 'php-node';
import * as php from 'php';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
function onReadFile(err, data) { 
  if (err) console.error(err); 
  else console.log(data); 
} 
php.run(__dirname+'/index.php', {}, function(e, r) {
    onReadFile(r, e);
})
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log((new Date()) + " | HTTP server listening on port: " + process.env.PORT);
});
app.set('views', __dirname);
app.engine('php', phpnode);
app.set('view engine', 'php');
 
app.all('/index.php', function(req, res) {
   res.render('index');
})
const wsServer = new WebSocketServer({ server: app });
wsServer.on('connection', function(socket){
    // Logs client connection on connect
    console.log((new Date()) + " | Client connected");
    socket.on('message', function(msg){
        // Logs input received from client
        console.log((new Date()) + " | Received input from client: " + "[" + msg + "]");
        // Converts input to a working URL
        const encodedWebSocket = 0;
        if (!isUrl(msg)) {
          encodedWebSocket = 'https://www.google.com/search?q=' + msg;
        } else if (isUrl(msg)) { 
          encodedWebSocket = 'https://' + msg;
        }
        function isUrl(val = val.trim()) {
          if (/^http(s?):\/\//.test(val) || val.includes('.')) 
            return true || false;
        };
        // Responds to websocket with a encoded URL of input
        data["request"] = encodedWebSocket;
        module.exports = data;
        socket.send(encodeURL.response);
    })
});
