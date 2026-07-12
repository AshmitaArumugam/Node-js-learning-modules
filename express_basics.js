const express = require('express');
const app = express();

app.use(express.json());       // Body parsing
app.use(express.static('public')); // Static files

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.send(`Query: ${req.query.q}`);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'User created', data: req.body });
});

app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});

app.get('/new-page', (req, res) => {
    res.send('New Page Content');
});

app.listen(3005, () => {
    console.log('Server running on http://localhost:3005');
});