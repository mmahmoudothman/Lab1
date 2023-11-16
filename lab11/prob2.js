const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const imageStream = fs.createReadStream('../images/mood1.jpg').pipe(res);
}).listen(3000);;