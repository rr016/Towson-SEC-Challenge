// Author: Rafal Ryczek
// Visual Studio Code

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
})

app.listen(port, function (req, res) {
    console.log('Application running on http://localhost:' + port);
});