// const diceLibrary = require('./index');
const express = require('express');
const app = express();

const moviesRouter = require('./api/movies');

import { getFaces, getRandomNumber } from "./api/dices/dice";

// console.log('====================================');
// console.log(diceLibrary.getRandomNumber(1,6));
// console.log('====================================');

app.use(express.json());
app.use('/movies', moviesRouter);

app.post('/dice/personalize/:sides', (req, res:number) => {
    getFaces(res)
    getRandomNumber(1, res)
})

app.listen(3000, () => console.log('listening on port 3000'))
