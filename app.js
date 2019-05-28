const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
    res.header("Content-Type",'application/json');

    fs.readFile('mock-data.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.stringify(JSON.parse(data)));
    });


});

app.listen(port, () => console.log(`Listening on port ${port}`));