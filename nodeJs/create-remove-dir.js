let fs = require('fs');


// create directory by sync
// fs.mkdirSync('Hello');

// remove directory by sync
// fs.rmdirSync('Hello');

// create dir async

fs.mkdir('stuff', function() {
  fs.readFile('readme.txt', 'utf8', function(err, data) {
    fs.writeFile('./stuff/writeme.txt', data);
  });
});

// remove a directory
// first remove the file from the directory

// fs.unlink('./stuff/writeme.txt', function() {
//  fs.rmdir('stuff');
// });
