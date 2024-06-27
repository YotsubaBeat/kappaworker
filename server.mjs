import * as encodeURL from './respond.mjs';
import { WebSocketServer } from 'ws';
import * as http from 'http';
import express from 'express';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
import * as sphp from 'sphp';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = process.env.PORT;
const wsServer = new WebSocketServer({ server: app });
app.use(sphp.express(__dirname+'/index.php'));
app.use(express.static(__dirname+'/index.php'));
wsServer.on('connection', function sphp.websocket(socket) {
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
