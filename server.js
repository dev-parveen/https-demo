"use strict";
let httts       = require("https");
let fs          = require("fs");
let express     = require('express');

let app = express();
let serverPort = 3443;
/**
 * reading private key and certificate from project directory
 */
let privateKey     = fs.readFileSync('private.key','utf8');
let privateCert    = fs.readFileSync('private.crt', 'utf8');

let option  = {
    key : privateKey,
    cert : privateCert
};


app.get('/', (req, res) =>{
    res.send('Well done! Https has been implemented');
});

let httpsServer = httts.createServer(option, app);
httpsServer.listen(serverPort, () =>{
    console.log(`Server is running on port ${serverPort}`);
});

