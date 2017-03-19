let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'application/json'});
  let jsonData = {
    name : 'vikash',
    lname : 'kumar',
    age : 24
  }
  // this is the method to send data to clent
  // json has to serilize before it send to the client
  res.end(JSON.stringify(jsonData));

});

server.listen(3000, '127.0.0.1');

console.log('server is running');
