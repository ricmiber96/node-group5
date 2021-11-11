const fs = require('fs');
const phrase1: string = "Pienso, luego programo.";
const phrase2: string = "La vida es una aventura que tenemos el privilegio de disfrutar.";
const phrase3: string = "Aqui no se come o que?";
const phrase4: string = "Y el anillo pa cuando?";
const phrase5: string = "Es el alcalde el que quiere que sean los vecinos el alcalde";
const phrase6: string = "En una tribu comanche JAU JAU JAU";

const aCounter = (phrase: string): number => {
  let counter = 0;
  for (let index = 0; index < phrase.length; index++) {
    if (phrase[index] == 'a')
      counter++;
  }
  return counter;
}

const wordCounter = (phrase: string): number => {
  const counter = 0;
  let phraseSplitted = []
  if(phrase.includes("\n")){
    phrase = phrase.replace(/(\r\n|\n|\r)/gm," ");
    phraseSplitted = phrase.split(" ");
  }else {
    phraseSplitted = phrase.split(" ");
  }
  return phraseSplitted.length;
}


const wordCounterFromFile = ():Promise<number> => {
  const filePath = process.argv[2]
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err:any, data:string) => {
      if (err != null) {
        reject(err);
      }
      resolve(wordCounter(data.toString()));
    });
  }) 

}


const resultFileCounter = async() =>{
  const result = await wordCounterFromFile()
  console.log(result);
}

wordCounterFromFile()
  .then(numberOfWords =>console.log(numberOfWords))
  .catch(err => console.error(err))

console.log("El número de palabras es: " + wordCounter(phrase1));
console.log("El número de palabras es: " + wordCounter(phrase2));

console.log("El número de a es: " + aCounter(phrase1));
console.log("El número de a es: " + aCounter(phrase2));

console.log(resultFileCounter());
