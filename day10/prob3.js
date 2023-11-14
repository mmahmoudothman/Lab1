const fs = require('fs');

fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));
// timeout
// readFile....
// Immediate


/**
 * due to the diagram at the prob1A 
 * 1- first we call setTime out which inside the timer 
 * 2- second we go to I/O callback whiech readfile 
 * 3- third we go to check/ setImmediate 
 */