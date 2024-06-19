// Desestructuración 
// Asignación desestructurante
const person = {
    name: 'Tony',
    age: 45,
    key: 'ironman',
    range: 'Junior',
};

// La desestructuración o asignación desestructurante de objetos nos permite
// acceder a los campos de un objeto para hacer
// usos concretos de éstos
const {name, age, key} = person;

console.log(name);
console.log(age);
console.log(key);


// Con la desestructuracion también podemos recibir parámetros
// que contengan valores por defecto, así como obtener los
// valores de los campos del objeto proporcionado
const fetchPerson = ({name, age, range = 'Senior'}) => {
    console.log(name, age, range);
}

fetchPerson(person);