const express = require('express');

const api = express();
api.get('/', (req, res) => {
    res.send('welcome to api');
})

module.exports = api;