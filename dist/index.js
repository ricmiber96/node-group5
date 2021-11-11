"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
var randomNumber;
var MINNUMBER = 1;
function getRandomNumber(minnumber, maxnumber) {
    randomNumber = Math.floor(Math.random() * (maxnumber - minnumber) + minnumber);
    return randomNumber;
}
exports.getRandomNumber = getRandomNumber;
function getFaces() {
    console.log("Introduce el numero de caras del dado");
    var numberFace = process.argv[2];
    return getRandomNumber(MINNUMBER, parseInt(numberFace));
}
console.log(getFaces());
