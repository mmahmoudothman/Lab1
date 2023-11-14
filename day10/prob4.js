var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();

// for the node it will be undifiend 
// for the browser with works fine as it has window and global and var