// ======================================================
// IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS
// ======================================================

// Importar archivo
import heroes from '../data/heroes'; // Path relativo al archivo donde estamos

console.log('heroes', heroes);

// Método Find:

export const getHeroById = (id) => {
  // find recorre todos los elementos del arreglo y devuelve los
  // elementos que satisfagan la condición devuelta en el callback
  return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroById(1));

// Mëtodo Filter:
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner); // Filter permite obtener los valores que cumplan con la condición dada.

console.log(getHeroesByOwner('Dc'));

