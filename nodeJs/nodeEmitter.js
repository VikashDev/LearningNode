// this module provides various event
let events = require('events');
// util module
let util = require('util');

// let myEmitter = new events.EventEmitter();
//
// myEmitter.on('someevent', function(msg) {
//   console.log(msg);
// });
//
// myEmitter.emit('someevent', 'the event is occured');


// person function expression
let Person = function(name) {
    this.name = name;
};
// it bind the person with EventEmitter
util.inherits(Person, events.EventEmitter);

// created the 3 new person object
let jack = new Person('jack');
let john = new Person('john');
let avi = new Person('avi');

// assigned it in the people array
let people = [jack, john, avi];

// looped through the function & assigned the event in the loop
people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name + 'speak it' + msg);
  });
});

// called the emit from EventEmitter
jack.emit('speak', 'hello dude');
