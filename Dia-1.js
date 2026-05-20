
//TIPOS DE DATOS

//Numeros
const PI = 3.14159; //Constante numérica
let entero = 10; //Número entero
let decimal = 3.14; //Número decimal
//Texto (string)
 let texto = "Ana"; //Cadena de texto
 let saludo = "hola"; //Cadena de texto
//Booleanos
 let esVerdadero = true; //Valor booleano
 let esFalso = false; //Valor booleano
//Nulos e indefinidos
 let vacio = null; // valor nulo
 let sinvalor = undefined; // valor indefinido

//Operadores
//Aritméticos
 let suma = 5 + 3; // Suma  
 let resta = 10 - 4; // Resta
 let multiplicacion = 6 * 7;
 let division = 20 / 5; // División
 let modulo = 10 % 3; // Módulo (resto de la división)
//Comparación
 let esMayor = 10 > 5; // Mayor que
 let esMenor = 3 < 5; // Menor que
    let esIgual = 7 == 7; // Igual a
    let esDiferente = 4 != 5; // Diferente de
    let esIgualEstrictamente = 5 === "5"; // Igual estrictamente (tipo y valor)
    let esDiferenteEstrictamente = 5 !== "5"; // Diferente estrictamente (tipo y valor) 
//Lógicos
 let esVerdaderoYFalso = true && false; // AND lógico
 let esVerdaderoOFalso = true || false; // OR lógico
 let esNegacion = !true; // Negación lógica 
 let esNegacion2 = !false; // Negación lógica

//Asignación
    let x = 10; // Asignación simple
    x += 5; // Asignación con operador de adición
    x -= 3; // Asignación con operador de resta
    x *= 2; // Asignación con operador de multiplicación
    x /= 4; // Asignación con operador de división
    x %= 3; // Asignación con operador de módulo

// Conver tidor de celsius a fahrenheit
// const celsius = 25; // Temperatura en grados Celsius
// const fahrenheit = (celsius * 9/5) + 32; // Conversión a Fahrenheit

// //mostramos temperatura de ambos
// console.log("celsius: ", + celsius);
// console.log("fahrenheit: ", + fahrenheit +  " convertido de celsius a fahrenheit");

// //convertir de fahrenheit a celsius
// const fahrenheit2 = 77; // Temperatura en grados Fahrenheit
// const celsius2 = (fahrenheit2 -32) * 5/9; // Conversión a Celsius

// console.log("fahrenheit: ", + fahrenheit2);
// console.log("celsius2: ", + celsius2 + " convertido de fahrenheit a celsius");
// // Convertir Celsius a Kelvin
// const celsius3 = 25; // Temperatura en grados Celsius
// const kelvin = celsius3 + 273.15; // Conversión a Kelvin
// console.log("kelvin: ", + kelvin + " convertido de celsius a kelvin");

// 1-PRODUCTO CON PRECIO ORIGINAL Y DESCUENTO
 const precioOriginal = 15000; 
  let Descuento = 0.20; // Descuento del 20%
   let precioConDescuento = precioOriginal * (1 - Descuento); // Cálculo del precio con descuento
   console.log("PrecioOriginal: ", + precioOriginal);
   console.log("Descuento: ", + Descuento);
   console.log("PrecioConDescuento: ", + precioConDescuento);

   // 2-DATOS DE UNA PERSONA

   const nombre = "Pablo"
   const edad= 25
   const Apellido = "Oliva"
   const Altura = 1.78
   let estaEmpleado = true

    console.log("Nombre: ", nombre + " TIPO string");
    console.log("Edad: ", edad + " TIPO number   entero");
    console.log("Apellido: ", Apellido + " TIPO string");
    console.log("Altura: ", Altura + " TIPO number decimal");
    console.log("Está empleado: ", estaEmpleado + " TIPO booleano verdadero");

// 3-AREA Y PERÍMETRO DE UN RECTÁNGULO

const base = 8;
const altura = 5;
const area = base * altura; // Cálculo del área
const perimetro = 2 * (base + altura); // Cálculo del perímetro

console.log("Base: ", base);
console.log("Altura: ", altura);
console.log("Área: ", area);
console.log("Perímetro: ", perimetro);

// 4-SEGUNDOS A HORAS, MINUTOS Y SEGUNDOS

const totalSegundos = 3725; // Total de segundos
const horas = Math.floor(totalSegundos / 3600); // Cálculo de horas
const minutos = Math.floor((totalSegundos % 3600) / 60); // Cálculo de minutos
const segundos = totalSegundos % 60; // Cálculo de segundos restantes

console.log(`${horas}h ${minutos}m ${segundos}s`); // Imprime el resultado en formato horas:minutos:segundos

// Ejercicio 5 — Intercambiar variables (sin variable auxiliar)

let a = 10;
let b = 20;

// a = a + b; // a ahora es 30
// b = a - b; // b ahora es 10 (30 - 20)
// a = a - b; // a ahora es 20 (30 - 10) forma tradicional

[a, b] = [b, a]; // Intercambio usando destructuración forma moderna

console.log("Valor de a después del intercambio: ", a); // Debería imprimir 20
console.log("Valor de b después del intercambio: ", b); // Debería imprimir 10