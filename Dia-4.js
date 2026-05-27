// Creá estas funciones:
// 1 - sumar(a, b) → retorna la suma
// 2 - restar(a, b) → retorna la resta
// 3 - multiplicar(a, b) → retorna la multiplicación
// 4 - dividir(a, b) → retorna la división
//     ojo: si b es 0, retorná "No se puede dividir por cero"
// 5 - potencia(base, exponente) → retorna base ** exponente

// 1- sumar funcion arrow

// let Sumar = (a,b) => {  return a + b }; console.log("Sumar",Sumar(10,5))
  

// // 2- restar
// let Restar = (a,b)=> { return a - b}; console.log("Resta",Restar(10,8))

// //3- multiplicar
// let multiplicar = (a,b) =>{ return a * b}; console.log("Multiplicar", multiplicar(10,5));

// // 4- dividir
// let dividir = (a , b=1) => {
//     if(b === 0)return "No se puede divir por cero";
// return a / b;
// };
//     console.log("Dividir", dividir(50 , 5));

// //  5- potencia
// let potencia = (base , exponente) =>{return base ** exponente};console.log( "Potencia",potencia(85, 4))

// Ejercicio - extras

const saludar = (nombre="invitado") => {return `Hola ${nombre}, bienvenido`};
 console.log(saludar("Juan"))
 console.log(saludar()); 

// par o impar

const parOImpar = (numero) => {
    if(numero % 2 ===0){return `${numero} par`}
    else {console.log(`${numero} impar`)}

}
console.log(parOImpar(10));
console.log(parOImpar(7));


const mayor = (a,b) =>{
 if (a > b) {return "A es mayor"
}else if(b > a) {return"B es mayor"}else{return "son iguales"}
}
console.log(mayor(5,5))
console.log(mayor (50,5))
console.log(mayor (50,500))

// Ejercicio 4 — Calcular promedio

const promedio = (a, b, c) => {
    const suma = a + b + c;
    return (suma / 3 ).toFixed(2)
}
console.log(promedio(80, 75, 90))

// 5- convertidor de monedas

const convertidor = (peso, cambio = 1000) => (peso / cambio).toFixed(2);

console.log(convertidor(5000))
console.log(convertidor(5000, 900))
