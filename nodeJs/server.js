// node default server module
let http = require('http');

// creating Server
let server = http.createServer((req, res) => {

    // find the url from request is coming
    console.log('request was made from ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello we got the response back');
});

server.listen(3000, '127.0.0.1');

console.log('Running at port 3000');
