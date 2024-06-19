// ==========
// FUNCIONES
// ==========

// Este tipo de creación de función no es recomendable
// ya que como vemos, yo puedo asignarle cualquier valor a greet
// y generar comportamientos indeseados en mi código.
function greet(name) {
    return `Hello, ${name}`;
}

greet = 30;

console.log(greet);


// Para crear funciones de una manera más segura en JavaScript
// se recomienda crear una constante y asignarle la defición de
// nuestra función, así:
const greetWithSomeSafe = function (name) {
    return `Hello, ${name}!`;
}

// greetWithSomeSafe = 20; // Esto da error.

console.log(greetWithSomeSafe);

// Funciones de flecha / Arrow functions | Lambdas
// Son funciones que ofrecen ciertas ventajas de escritura
// y permiten simplificar un poco el código, haciéndolo más legible

const greetMoreExplicit = (name) => {
    return `Hello, ${name}`;
};


const greetArrow = (name) => `Hello, ${name}!`;

console.log('greetArrow', greetArrow);

// Para retornar un objeto literal usando una arrow function
// necesitamos reemplazar los corchetes de bloque {} por 
// parentesis ()
const getUser = () => (
    {
        userId: 1,
        username: 'deejay_edi',
    }
);

console.log(getUser());

// Ejercicio: 

// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
function getActiveUser(name) {
    return {
        uid: 'abc123',
        username: name
    };
}

const activeUser = getActiveUser('Edisson');
console.log('activeUser', activeUser);

const getActiveUserArrow = (name) => ({
    uid: 'abc123',
    username: name
});

const activeUserArrow = getActiveUserArrow('Edisson');
console.log('activeUserArrow', activeUserArrow);




