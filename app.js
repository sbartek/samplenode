const http = require('http');
const os = require('os');

const port = 80;

var handler = function(request, response) {
    if (request.url === '/') {
        console.log(
            "Received request from " + request.connection.remoteAddress
        ); 
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        text = "Hello World\n" +
        "from " + os.hostname() + "\n";
        response.end(text);
    } else if (request.url === '/healthCheck') {
        var random = Math.random( );
        response.statusCode = 200;
        response.end("OK " + random);
    }
};

const server = http.createServer(handler);
server.listen(port);
