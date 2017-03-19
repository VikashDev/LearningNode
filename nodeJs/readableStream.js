let fs = require('fs');
// read data from a file in chunks
let myReadStream = fs.createReadStream(__dirname + '/write.txt');

myReadStream.on('data', function(chunk) {
    console.log('the chunks goes here');
    console.log(chunk);
});
