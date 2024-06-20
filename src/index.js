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

const useState = (value) => {
  return [
    value,
    () => {
      console.log("Hello World!");
    },
  ];
};

const arr = useState('Goku');