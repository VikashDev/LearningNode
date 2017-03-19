


let arrayCounter  = function(arr) {
  console.log('Total no in this array is ' + arr.length );
};

// exporting the part of this module to be accessable in other js file
// this provide a refrence object in the other file
module.export = arrayCounter;
