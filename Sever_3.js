const http = require('http');

// Step 1: Create the server
// createServer takes a callback function that runs on EVERY request
const server = http.createServer((req, res) => {
    console.log("Request Made");
});

// Step 2: Make the server listen on a port
// 3000 = port number, 'localhost' = hostname
// The third argument (callback) runs once, when the server starts successfully
server.listen(3000, 'localhost', () => {
    console.log("Server is Listening");
});