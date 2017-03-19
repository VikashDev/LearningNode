let fs = require('fs');
// read data from a file in chunks
let myReadStream = fs.createReadStream(__dirname + '/write.txt');

let myWriteStream = fs.createWriteStream(__dirname + '/writeSteam.txt');

myReadStream.on('data', function(chunk) {
    console.log('the chunks goes here');

    // for writing in the file
    myWriteStream.write(chunk);
    // console.log(chunk);
});
