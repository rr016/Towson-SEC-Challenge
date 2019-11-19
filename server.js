// Author: Rafal Ryczek
// Visual Studio Code

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3000;
const db_uri = 'mongodb://localhost:27017/db1';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port, function (req, res) {
    mongodb.connect(db_uri, function (err, db) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log('Application running on http://localhost:' + port);
        require('./routes')({ dbConnection: db, app, path });
    });
});