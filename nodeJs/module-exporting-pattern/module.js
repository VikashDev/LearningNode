let adder = (a, b) => {
  return `the sum is ${a+b}`;
};

let counter = function(arr) {
  console.log('tha element is ' + arr.length);
};

let pi = 3.143;


// method one to export it
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// method two to export it
module.exports.counter = function(arr) {
  console.log('tha element is ' + arr.length);
};

// Method three to export it in other file
module.exports = {
  counter : counter,
  adder : adder,
  pi : pi
};
