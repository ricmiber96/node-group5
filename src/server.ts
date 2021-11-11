// const diceLibrary = require('./index');
const express = require('express');
const app = express();

const moviesRouter = require('./api/movies');

// console.log('====================================');
// console.log(diceLibrary.getRandomNumber(1,6));
// console.log('====================================');

app.use(express.json());
app.use('/movies', moviesRouter);

app.listen(3000, () => console.log('listening on port 3000'));
