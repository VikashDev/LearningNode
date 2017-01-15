'use strict';
const express = require('express');
const webapp = express();

webapp.get('/', (req, res) => {
    res.send('Hello BC')
});

webapp.get('/about', (req, res) => {
    res.send('About Us');
});

webapp.get('/contact', (req, res) => {
    res.send('Contact Us');
});


webapp.listen(3000, () => {

});