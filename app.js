const http = require('http');
const os = require('os');

const port = 80;

var handler = function(request, response) {
    console.log(
        "Received request from " + request.connection.remoteAddress
    ); 
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    text = "Hello World\n" +
        "from " + os.hostname() + "\n";
    response.end(text);
};

const server = http.createServer(handler);
server.listen(port);
