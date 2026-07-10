const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    // Route: Home page
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the Home Page');
    }

    // Route: Old page -> redirect to new page
    else if (req.url === '/old-page') {
        res.writeHead(301, { 'Location': '/new-page' });
        res.end();
    }

    // Route: New page (redirect target)
    else if (req.url === '/new-page' && req.method === 'GET') {
        res.end('You have reached the New Page!');
    }

    // Route: Users - GET vs POST handled differently on the SAME url
    else if (req.url === '/users' && req.method === 'GET') {
        res.end('Fetching all users');
    }
    else if (req.url === '/users' && req.method === 'POST') {
        res.end('New user created');
    }

    // Fallback: 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, 'localhost', () => {
    console.log("Server is Listening on http://localhost:3000");
});