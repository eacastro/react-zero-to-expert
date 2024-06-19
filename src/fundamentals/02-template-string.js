// Template String | Template Literal
// Es un tipo de literal de String que permite 
// interpolar Strings e incrustar resultados de evaluaciones de código
// en nuestros Strings.
const name = 'Edisson';
const lastName = 'Castro';

// Una de las funciones de template string es no tener que hacer éste tipo de concatenación:
const fullName = name + ' ' + lastName;
console.log(fullName);

// Para usar template string debemos usar backticks `` y la sintaxis ${valor}
// si se desea interpolar algún tipo de valor.
const templateFullName = `${name} ${lastName}`;
console.log(templateFullName);

// Usando template String podemos generar textos multilínea:
const greeting = `Hello everyone:
    My name is ${name} ${lastName}
`;
console.log(greeting);

// También podemos concatenar resultados de expresiones o funciones con Template String:
console.log(`I'm ${40 - 9} years old :-)`);


function getGreeting(name) {
    return `Hello, ${name}`;
}

console.log(`This is a text: ${getGreeting(name)}`);

