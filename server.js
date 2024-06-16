// Declares itself as a websocket server
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({
  port: process.env.PORT
});
wsServer.on('connection', function(socket){
    // Logs client connection on connect
    console.log((new Date()) + " | Client connected");
    socket.on('message', function(msg){
        // Logs input received from client
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
        // Responds to websocket
        socket.send(msg);
    })
});
// Logs websocket status
console.log((new Date()) + " | Websocket Server opened on port: " + process.env.PORT)
