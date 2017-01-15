'use strict';
const express = require('express');
const webapp = express();

console.log(__dirname);

webapp.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

webapp.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

webapp.get('/work', (req, res) => {
    res.sendFile(__dirname + '/public/work-details.html');
});

webapp.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html');
});

webapp.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});


webapp.listen(3000, () => {

});