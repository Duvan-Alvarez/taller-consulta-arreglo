// Taller de Investigación sobre Arreglos en JavaScript
// Nombre del estudiante: [duvan alvarez meneses]

// Parte 2: El Universo de los Arreglos

// Investigación #3: Fundamentos de los Arreglos
// 1. Define qué es un arreglo en JavaScript.
/**
 * Escribe tu explicación aquí:
 * Un arreglo es...En JavaScript, un arreglo (también llamado array o matriz) es una estructura de datos que permite almacenar 
 una colección ordenada de múltiples valores en una sola variable, en lugar de tener que usar una variable diferente para cada dato. 
 Los elementos de un arreglo se acceden mediante un índice numérico (empezando en 0), 
 y puedes guardar diferentes tipos de datos (números, texto, objetos, etc.) en el mismo arreglo, además de que su longitud es dinámica 
 y puede cambiar. 
 
 */

// 2. Explica para qué se utilizan los arreglos en el desarrollo de software.
/**
 * Escribe tu explicación aquí:
 * Los arreglos se utilizan para...Los arreglos en el desarrollo de software se usan para almacenar colecciones de datos similares 
 de forma organizada y eficiente, permitiendo el acceso directo a cada elemento a través de un índice numérico. 
 Son fundamentales para el manejo de grandes volúmenes de datos, optimizan algoritmos de búsqueda y ordenamiento, 
 facilitan la implementación de otras estructuras de datos complejas y son esenciales para procesar elementos como píxeles en imágenes 
 o señales. 
 
 */

// 3. Crea un ejemplo de un arreglo que contenga múltiples tipos de datos.
// Escribe el código aquí
let informacion = ["Juan", 25, true, 1.75];

// Muestra el arreglo `arregloMixto` en la consola.



// Investigación #4: Métodos Mutables (Mutable Methods)
// 1. Define qué es un método mutable.
/**
 * Escribe tu explicación aquí:
 * Un método mutable es aquel que...En el contexto de la programación, se refiere a un método dentro de un objeto cuyo propósito 
 es modificar el estado interno o el contenido de ese objeto, en lugar de devolver un nuevo objeto con un estado diferente. 
 Los objetos mutables permiten que sus propiedades o elementos sean cambiados directamente después de su creación. 
 
 */

// 2. Investiga y aplica 8 métodos de arreglos que sean mutables.
console.log("--- MÉTODOS MUTABLES ---");

// Método 1: [metodo push]
// Descripción: El método push () agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
// Ejemplo:let sports = ["soccer", "baseball"];
let total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4


// Método 2: [metodo unshift]
// Descripción: El método unshift () agrega uno o más elementos al comienzo de un array y devuelve la nueva longitud.
// Ejemplo: let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]


// Método 3: [método pop]
// Descripción: El método pop () elimina el último elemento de un array y devuelve ese elemento. Este método cambia la longitud del array.
// Ejemplo: var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]


// Método 4: [método shift]
// Descripción: El método shift () elimina el primer elemento de un array y devuelve ese elemento eliminado. 
Este método cambia la longitud del array.
// Ejemplo: const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
//[2, 3]


// Método 5: [método splice]
// Descripción: El método splice () cambia el contenido de un array, eliminando o reemplazando elementos existentes y / o agregando 
nuevos elementos en su lugar.
// Ejemplo: const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserta el elemento en el primer índice
console.log(months);
//["Jan", "Feb", "March", "April", "June"]


// Método 6: [método reverse]
// Descripción: El método reverse () invierte un array. 
El primer elemento del array se convierte en el último y el último elemento del array se convierte en el primero.
// Ejemplo: const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]



// Investigación #5: Métodos Inmutables (Immutable Methods)
// 1. Define qué es un método inmutable y por qué son importantes.
/**
 * Escribe tu explicación aquí:
 * Un método inmutable no puede modificar el estado de un objeto o datos existentes. 
 En lugar de cambiar el valor original, crea un nuevo objeto con los cambios deseados, lo que hace el código más predecible, 
 seguro y fácil de depurar, especialmente en escenarios concurrentes. 
 
 */

// 2. Investiga y aplica 10 métodos de arreglos que sean inmutables.
console.log("\n--- MÉTODOS INMUTABLES ---");

// Método 1: [Nombre del método]
// Descripción: 
// Ejemplo:


// Método 2: [Nombre del método]
// Descripción: 
// Ejemplo:


// Método 3: [Nombre del método]
// Descripción: 
// Ejemplo:
