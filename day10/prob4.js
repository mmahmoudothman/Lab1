var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

/**
 * 1- node try to make every node class private so there is no global and var doesn't work
 * 2- for the browser it has window/global so it works 
 */