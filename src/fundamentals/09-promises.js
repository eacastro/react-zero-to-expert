import { getHeroById } from "./fundamentals/08-import-export-array-functions";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // importar getHeroById
//         const heroe = getHeroById(2);
//         console.log(heroe);
//         resolve(heroe); // El valor del argumento será transferido al then de la promesa
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });


// promise.then((heroe) => { console.log('Heroe fetched', heroe); }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // importar getHeroById
            const heroeFetched = getHeroById(id);

            if (heroeFetched !== undefined) {
                resolve(heroeFetched); // El valor del argumento será transferido al then de la promesa
            }

            reject('No se pudo encontrar el heroe');
        }, 2000);
    });

};

getHeroeByIdAsync(5).then(console.log).catch(console.warn);