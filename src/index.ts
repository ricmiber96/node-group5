let randomNumber : number
const MINNUMBER = 1;

function getRandomNumber(minnumber : number, maxnumber : number):number{
    randomNumber = Math.floor(Math.random() * (maxnumber - minnumber) + minnumber)
    return randomNumber
}

function getFaces():number{
    console.log("Introduce el numero de caras del dado")
    let numberFace = process.argv[2]
    return getRandomNumber(MINNUMBER, parseInt(numberFace))
}

console.log(getFaces());
