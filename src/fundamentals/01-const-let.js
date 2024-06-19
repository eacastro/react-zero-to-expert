// =======================================================
// Variables y constantes (keyword var ya no se debe usar)
// ========================================================

// const permite crear constantes con un ámbito dado.
const myName = 'Edi';
const myLastName = 'Castro';

// let crea variables de scope o con un ámbito dado.
let givenValue = 5; 
givenValue = 4;

console.log(myName, myLastName, givenValue);

if (true) {
    // Esta version de givenValue solo existe en el ámbito del if
    let givenValue = 6;
    console.log(givenValue);


}

// Esta versión de givenValue pertenece al ámbito de index.js
console.log(givenValue);