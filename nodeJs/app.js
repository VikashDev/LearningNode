// normal function statement
// created a function
function sayHi() {
  console.log('Hi');
}
// invoked the function
sayHi();


// function Expression

let sayBye = function () { console.log('bye'); };

sayBye();


// Call back

function callBackFunction(pranm) {
  pranm();
}

callBackFunction(sayBye);
// output will be - bye
