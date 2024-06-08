const WebSocket = require('ws');
const wsServer = new WebSocket.Server({
  port: process.env.PORT
});

wsServer.on('connection', function(socket){
    // Some feedback on the console
    console.log((new Date()) + " | Client connected");

    // Attach some behavior to the incoming socket

    socket.on('message', function(msg){
        console.log((new Date()) + "| Received data from client | " + msg);
        // socket.send("Take this back: " + msg);

        // Brodcast that message to all connected clients
        let countClients = 0;
        wsServer.clients.forEach(function(client){
            countClients = countClients+1
            client.send(msg);
        });

    })

});

console.log("URL: " + "https://" + process.env.PROJECT_DOMAIN + ".glitch.me" + " | " + "Port:  " + process.env.PORT)