"use strict";
var diceLibrary = require('./index');
var express = require('express');
var app = express();
console.log('====================================');
console.log(diceLibrary.getRandomNumber(1, 6));
console.log('====================================');
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(3000, function () { return console.log('listening on port 3000'); });
