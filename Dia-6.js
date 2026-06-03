// Día 6 — Objetos
// ejemplos 
// const persona = {
//     nombre: "Juan",
//     edad: 25,
//     saludar(){
//         return `Hola, soy ${this.nombre}`
//     }
// };
// // console.log(persona.saludar()); == "Hola soy Juan"

// const persona = { nombre: "Juan", edad: 25, ciudad: "Rioja" };

// // Sin destructuring
// const nombre = persona.nombre;
// const edad = persona.edad;

// // Con destructuring — más limpio
// const { nombre, edad, ciudad } = persona;
// console.log(nombre, edad, ciudad); // → Juan 25 Rioja

//////////////////////////////////////////////////////////

// Creá un objeto "persona" con estas propiedades:
// nombre, apellido, edad, altura, ciudad
// Y estos métodos:
// - presentarse() → "Hola, soy Juan Perez, tengo 25 años"
// - esMayorDeEdad() → true o false
// - descripcion() → "Juan mide 1.75m y vive en Rioja"

// const persona ={ nombre: "Pablo",
//                 apellido: "Oliva",
//                 edad: 25,
//                 altura: 1.75,
//                 ciudad: "La Rioja",
//         presentar(){
//             return`Hola soy ${this.nombre} ${this.apellido}, y tengo ${this.edad} años`
//         },
//         esMayorDeEdad(){
//             return this.edad > 18; // devuelve booleano real
//         },
//         descripcion(){
//             return `${this.nombre} mide ${this.altura} y vive en ${this.ciudad}`
//         }
        

// };
// const { nombre, edad, ciudad} = persona;
//  console.log(nombre,edad,ciudad)
// // console.log(persona.presentar())
// // console.log(persona.esMayorDeEdad())
// // console.log(persona.descripcion())
/////////////////////////////////////////////////////////////////////////////////////////////7

//Ejercicio 1 — Objeto Auto
// Creá un objeto "auto" con:
// marca, modelo, anio, velocidadActual (arranca en 0)
// Y estos métodos:
// - acelerar(cantidad) → suma cantidad a velocidadActual
// - frenar(cantidad) → resta cantidad, mínimo 0 (no puede ser negativo)
// - estado() → "El Toyota Corolla va a 60 km/h"

const auto = {
    marca:"Toyota",
    Modelo:"Toyota Corolla",
    año:2020,
    velocidadActual: 0,
    // metodos
    acelerar(cantidad) {
        return this.velocidadActual += cantidad;
    },
    frenar(cantidad) {
        this.velocidadActual = Math.max(0, this.velocidadActual - cantidad);
        return this.velocidadActual;
    },

    estado() {
        return `El ${this.Modelo} va a ${this.velocidadActual} km/h`;
    },

}

auto.acelerar(60);
console.log(auto.estado()); // → El Toyota Corolla va a 60 km/h
 auto.frenar(20);
 console.log(auto.estado()); // → El Toyota Corolla va a 40 km/h
 auto.frenar(100);
 console.log(auto.estado()); // → El Toyota Corolla va a 0 km/h


 ////////////////////////////////////////////////////////////////

 const alumnos = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Juan", nota: 42 },
    { nombre: "Maria", nota: 91 },
    { nombre: "Pedro", nota: 58 },
    { nombre: "Lucia", nota: 76 }
];

// 1 - Filtrá los alumnos que aprobaron (nota >= 60)
// 2 - Extraé solo los nombres de los aprobados
// 3 - Calculá el promedio general de la clase

//1- filtrar nota mayor a 60
const alumno = alumnos.filter( p => p.nota >= 60)
console.log(alumno);


// 2- extraer solo nombres de aprobados 
const nombres = alumnos.filter( p => p.nota >=60).map( p => p.nombre)
console.log(nombres);

// 3 - Calculá el promedio general de la clase

const promedio = alumnos.reduce((acc, alumno) => acc + alumno.nota, 0) / alumnos.length;

console.log(promedio);