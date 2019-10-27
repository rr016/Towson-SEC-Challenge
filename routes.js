// Author: Rafal Ryczek
// Visual Studio Code

'use strict'
module.exports = function (context) {
    const app = context.app;

    app.get('/', function (req, res) {
        console.log('REST API is working...');
    });

    app.get('*', (req, res) => {
        // Catch all
        res.sendFile(context.path.join(__dirname, 'client/build/index.html'));
    });

};