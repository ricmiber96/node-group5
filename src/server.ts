const diceLibrary = require('./index')
const express = require('express');
const app = express();


console.log('====================================');
console.log(diceLibrary.getRandomNumber(1,6));
console.log('====================================');

app.get('/',(req:any, res:any) => {
    res.send('Hello world')
})

app.listen(3000,()=>console.log('listening on port 3000'))