let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  let readStream = fs.createReadStream(__dirname + '/index.html');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('server is running');
