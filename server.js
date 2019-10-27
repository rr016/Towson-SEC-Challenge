// Author: Rafal Ryczek
// Visual Studio Code

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port, function (req, res) {
    console.log('Application running on http://localhost:' + port);
    require('./routes')({ app, path });
});