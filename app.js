const http = require('http');
const os = require('os');

const port = 80;

var handler = function(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    if (request.url === '/') {
        console.log(
            "Received request from " + request.connection.remoteAddress
        ); 
        response.statusCode = 200;
        text = "Hello World\n" +
        "from " + os.hostname() + "\n";
        response.end(text);
    } else if (request.url === '/healthCheck') {
        var randomNumber = Math.random( );
        console.log(randomNumber);
        if (randomNumber < .5) {
            response.writeHead(500);
            response.end("Not OK");
        } else {
            response.statusCode = 200;
            response.end("OK");
        }
    }
};

const server = http.createServer(handler);
server.listen(port);
