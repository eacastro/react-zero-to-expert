const characters = ["Goku", "Vegeta", "Trunks"];
const [character1] = characters;
const [, character2] = characters;
const [, , character3] = characters;

console.log(characters);
console.log(character1);
console.log(character2);
console.log(character3);

const getArray = () => {
  return ["ABC", 123];
};

const [text, numbers] = getArray();
console.log(text, numbers);

// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo valor se llamará setNombre
const getCharacters = (value) => {
  return [
    value,
    function setName() {
      console.log("Hello World!");
    },
  ];
};

const arr = getCharacters('Goku');
//const [, setName] = arr;

setName();



// ===========
// Ejercicios:
// ===========
// 1. Desestructura un arreglo que tiene nombres de personas