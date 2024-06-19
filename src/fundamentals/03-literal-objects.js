// ==================
// Objetos literales:
// ===================

const person = {
    // Los objetos en JavaScript son pares clave-valor
    name: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 555234,
        lat: 14.2345,
        lng: 34.92289
    }
}; // Las llaves representan un objeto literal
// console.table(person);
console.log(person);

const person2 = person; // Estamos copiando la referencia al espacio en memoria de person. No es buena práctica y no debe hacerse.
person2.name = 'Peter';

console.log(person2);

// Clonación de objetos usando el operador spread (...)
const personClone = {...person};
personClone.name = 'John';
console.log(person);
console.log(personClone);



