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
        // Converts input to a working URL
        if (!isUrl(msg)) {
          msg = 'https://www.google.com/search?q=' + msg;
        } else if (isUrl(msg)) { 
          msg = 'https://' + msg;
        }
        function isUrl(val = val.trim()) {
          if (/^http(s?):\/\//.test(val) || val.includes('.')) 
            return true || false;
        };
        // Responds to websocket with a encoded URL of input
        navigator.ServiceWorker.register('sw.js', {
          scope: __uv$config.prefix
        });
        socket.send(__uv$config.prefix + __uv$config.encodeUrl(msg));
    })
});
// Logs websocket status
console.log((new Date()) + " | Websocket Server opened on port: " + process.env.PORT)
