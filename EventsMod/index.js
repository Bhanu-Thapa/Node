// Where we can create , fire, and listen for own events.

// eg.1- Registering for the event to ne fired only one time using once.
// eg.2- Create an event emitter instance and register a couple of callbacks
// eg.3- Registering for the events with callback parameters

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', () => {
  console.log('Your name is Bhanu');
});

event.on('sayMyName', () => {
  console.log('Your name is Thapa');
});

event.emit('sayMyName');

event.on('checkPage', (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit('checkPage', 200, 'ok');
