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
  const phraseSplitted = phrase.split(" ");

  return phraseSplitted.length;
}

console.log("El número de palabras es: " + wordCounter(phrase1));
console.log("El número de palabras es: " + wordCounter(phrase2));

console.log("El número de a es: " + aCounter(phrase1));
console.log("El número de a es: " + aCounter(phrase2));
