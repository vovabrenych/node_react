const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, 'mock-data.json'));
});

app.listen(8000);