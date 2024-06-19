// ==================
// Arreglos en JavaScript:
// ===================
// Un arreglo es una colección de información que se encuentra
// dentro de una misma variable.
const myArray = [1, 2, 3, 4];
// push() modifica la referencia al objeto, por lo que no se recomienda su uso.
myArray.push(1); 

// Para agregar elementos a un arreglo, se recomienda el uso del operador spread, así:
let mySecondArray = [...myArray, 6];
myArray.push(5);

const myThirdArray = mySecondArray.map(function(value) {
    return value * 2;
});

console.log('myArray', myArray);
console.log('mySecondArray', mySecondArray);
console.log('myThirdArray', myThirdArray);

