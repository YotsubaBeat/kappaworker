
var url = require('url');
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({
  port: process.env.PORT
});

wsServer.on('connection', function(socket){
    // Some feedback on the console
    console.log((new Date()) + " | Client connected");

    // Attach some behavior to the incoming socket

    socket.on('message', function(msg){
        console.log((new Date()) + " | Received input from client: " + "[" + msg + "]");
        if (!isUrl(msg)) {
          msg = 'https://www.google.com/search?q=' + msg;
        } else if (!(msg.startsWith('https://') || msg.startsWith('http://'))) { 
          msg = 'http://' + msg;
        }
        function isUrl(val = ''){
          if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
          return false;
        };
        socket.send(msg);
    })

});

console.log((new Date()) + " | Websocket Server opened on port: " + process.env.PORT)
