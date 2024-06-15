
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
        socket.send("Got it!");
    })

});

console.log((new Date()) + " | Websocket Server opened on: " + url + ":" + process.env.PORT)
