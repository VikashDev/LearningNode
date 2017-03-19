let http = require('http');
let fs = require('fs');

// pipe read the data from the buffer and write the buffer to the location where
// we give path.
// it manages all the things itself


//let readStream = fs.createReadStream(__dirname + '/readme.txt');
// let writeStream = fs.createWriteStream(__dirname + '/pipedData.txt');
// readStream.pipe(writeStream);


// res is the writeable stream
let server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  let readStream = fs.createReadStream(__dirname + '/readme.txt');
  readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('server is running');
