// global method

// These methods are globally avalable to the node & comes with it
let time = 0;

console.log('this is global');

setTimeout(function() {
  console.log('this is global');
}, 3000);

// function to call after specific time
let timer = setInterval(function() {
  time += 2;
  console.log(time + 'second has passed');

  if(time > 5) {
    // clear the timer / stop it
    clearInterval(timer);
  }
},2000);

// node provides full directory path

console.log(__dirname);

// node provides full file path

console.log(__filename);
