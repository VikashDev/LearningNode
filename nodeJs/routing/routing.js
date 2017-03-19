let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){
    if(req.url === '/home' || req.url === '/') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api') {
      let obj = [{
        name : 'vikash',
        lname : 'kumar',
        age : 24
      }]
      res.writeHead(200, {'Content-Type' : 'application/json'});

      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404, {'Content-Type' : 'text/html'});
      fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('running at 3000');
