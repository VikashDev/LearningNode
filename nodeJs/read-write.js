let fs = require('fs');

// for reading a file by syncronous Method
let readme = fs.readFileSync('readme.txt', 'utf8');
//console.log(readme);

// for writing in a file by syncronous Method
// fs.writeFileSync('write.txt', readme);

// non blocking code as it is async
fs.readFile('readme.txt', 'utf8', function (err, data) {

    // console.log(data);
    //err for any error
    // data is the content of the file
    fs.writeFile('writeAsync.txt', data);

});

// for deleting a file in the 
fs.unlink('writeAsync.txt');
