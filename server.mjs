import * as encodeURL from './respond.mjs';
import server from 'ws';
import * as http from 'http';
import express from 'express';
import * as path from 'path';
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.php'));
  });
const httpserver = http.createServer(app);
const port = process.env.PORT;
const wsServer = new server({ server: httpserver });
httpserver.listen(port);
console.debug('Server listening on port ' + port);
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
