// const frutas = ["manzana", "banana", "naranja"];

//  // Array y sus meteodos
// // Agregar y quitar
// frutas.push("uva");        // agrega al final
// frutas.pop();              // quita el último
// frutas.unshift("fresa");   // agrega al inicio
// frutas.shift();            // quita el primero

// // Información
// frutas.length;             // cantidad de elementos
// frutas.includes("banana"); // true o false
// frutas.indexOf("naranja"); // posición del elemento

// // Los más importantes (devuelven un nuevo array)
// frutas.map(f => f.toUpperCase());        // transforma cada elemento
// frutas.filter(f => f.length > 6);       // filtra por condición
// frutas.find(f => f === "banana");        // encuentra uno

// // const numeros = [10, 25, 8, 42, 15, 3, 67, 30, 19, 50];

// // 1 - Mostrá la cantidad de elementos
// // 2 - Mostrá el primer y último elemento
// // 3 - Filtrá solo los mayores a 20
// // 4 - Multiplicá cada número por 2
// // 5 - Encontrá el primer número mayor a 40

// // 1- Mostrar cantiodad de elementos

// const numeros = [10, 25, 8, 42, 15, 3, 67, 30, 19, 50];
// console.log(numeros.length);

// // 2-Primer y ultimo elemento
// console.log("primero", numeros[0], "Ultimo: ", numeros[numeros.length -1])

// // Filtrar solo mayores a 20
// const filtro = numeros.filter(numero => numero > 20)
// console.log(filtro);

// // multiplicar cada numero por 2

// let doble = numeros.map(numero => numero * 2)
// console.log(doble)

// // Primer numero amyor a 40

// console.log(numeros.find(n => n > 40));

// ///////////////////////////////////////////////////////////////

//  Ejercicios extra — Día 5
const palabras = ["sol", "computadora", "pan", "javascript", "red", "programacion"];

// Filtrá solo las palabras que tengan más de 5 letras
// Resultado esperado: ["computadora", "javascript", "programacion"]
let masMayor = palabras.filter(palabra => palabra.length > 5)
console.log(masMayor);

const nombres = ["ana", "juan", "maria", "pedro", "lucia"];

// Convertí todos los nombres a mayúscula con map
// Pista: usá .toUpperCase()

let mayuscula = nombres.map(nombre => nombre.toUpperCase())
console.log(mayuscula);

const numeros = [10, 25, 8, 42, 15, 3, 67];

// Sumá todos usando reduce
// Pista: reduce recibe una función con dos parámetros:
// acumulador (el total que va sumando) y elemento actual

const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// El 0 es el valor inicial del acumulador
console.log(suma)

        ///////////
const productos = [
    { nombre: "laptop", precio: 1500 },
    { nombre: "mouse", precio: 25 },
    { nombre: "teclado", precio: 80 },
    { nombre: "monitor", precio: 400 },
    { nombre: "auriculares", precio: 60 }
];
// 1 - Filtrá los productos que cuesten más de 50
// 2 - De esos, extraé solo los nombres con map
// 3 - Mostrá el resultado

// 1
// let Mayor = productos.filter(num => num.precio > 50);
// console.log(Mayor);
// // 2
// let nombres1 = Mayor.map(productos => productos.nombre)
// console.log(nombres1)

const resultado = productos.filter(p=>p.precio >50).map(p => p.nombre)
console.log(resultado)



