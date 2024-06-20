const http = require('http');
 const fs = require('fs');

 const port = process.env.PORT;
 const host = 'https://app-8bea6ced-fb1b-436e-889a-38337f578636.cleverapps.io/';

 const httpServer = http.createServer(httpHandler);

 httpServer.listen(port, host, () => {
     console.log((new Date()) + ' | HTTP Server running on port: ' + port);
 });

 function httpHandler(req, res) {
     fs.readFile(req.url, function (err, data) {

         if (err == null ) {

             res.writeHead(200, {'Content-Type': 'text/html'});
             res.write(data);
             res.end();
         }
     });
 }
