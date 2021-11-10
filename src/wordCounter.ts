const phrase1: string = "Pienso, luego programo.";
const phrase2: string = "La vida es una aventura que tenemos el privilegio de disfrutar.";

const wordCounter = (phrase :string) :number => {
  const counter = 0;
  const phraseSplitted = phrase.split(" ");

  return phraseSplitted.length;
}

console.log("El número de palabras es: " + wordCounter(phrase1));
console.log("El número de palabras es: " + wordCounter(phrase2));
