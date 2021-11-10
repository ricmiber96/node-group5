let randomNumber : number
const MINNUMBER = 1;
const MAXNUMBER = 7;

function getRandomNumber(minnumber : number, maxnumber : number):number{
    randomNumber = Math.floor(Math.random() * (maxnumber - minnumber) + minnumber)
    return randomNumber
}

console.log(getRandomNumber(MINNUMBER,MAXNUMBER));


