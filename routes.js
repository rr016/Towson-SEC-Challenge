// Author: Rafal Ryczek
// Visual Studio Code

'use strict'
module.exports = function (context) {
    const app = context.app;
    const mongodb = require('mongodb');
    const db = context.dbConnection.db('db1');
    const collection = db.collection('Towson-SEC-Challenge');

    app.get('/', function (req, res) {
        console.log('REST API is working...');
    });

    app.post('/api/confirm', function (req, res) {
        req.body['createdOn'] = new Date();
        collection.insertOne(req.body)
            .then(doc => res.status(200).redirect('/'))
            .catch(err => res.status(500).send(err));
    });

    app.get('*', (req, res) => {
        // Catch all
        res.sendFile(context.path.join(__dirname, 'client/build/index.html'));
    });

};