// Cálculo del Índice de Masa Corporal (IMC)
const peso = 70;   // en kg
const altura = 1.75; // en metros

let IMC = peso / altura ** 2; // Cálculo del IMC

console.log("Peso actual: ", peso + "kg");
console.log("Altura Actual: ", altura + "m");
console.log("IMC: ", IMC.toFixed(2)); // Redondear el IMC a 2 decimales

if(IMC < 18.5){
    console.log("Bajo peso");
}else if(IMC >= 18.5 && IMC < 24.9){
console.log("peso normal");

}else if(IMC >= 25 && IMC <= 29.9)
    {
        console.log("Sobrepeso");
    }else if(IMC >= 30){
        console.log("Obesidad");
    }else
    {
        console.log("Valor de IMC no válido");
    }

    const riesgo = IMC >= 25 ? "Tiene Riesgo" : "no tiene riesgo";
    console.log("El paciente:", riesgo);


// EJERCICIO-1: Número positivo, negativo o cero
 const numero = -15;

 if(numero === 0){
    console.log("El número es cero");
 }else if(numero < 0){
    console.log("El numero es negativo");
 }else{
    console.log("El numero es positivo");
 }

 // EJERCICIO-2: Un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400.

    const anio = 2024;

    if(anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)){
        console.log(anio + " es un año bisiesto");
    }   else{
        console.log(anio + " no es un año bisiesto");
    }

    //Calculadora simple

    const num1 = 10;
    const num2 = 5;

    const operasion = "divicion";

    switch(operasion)
    {
    case "divicion":  
    console.log("division:", num1 / num2 );
    break
    case "suma": 
    console.log("suma", num1 + num2);
    break
    case "resta": 
        console.log("resta: ", num1 - num2);
    break
    case "multiplicacion":
        console.log("resultado:", num1 * num2);
      break;
      default:  console.log("Operacion no valida");
    }

    // nota Alumno


const nota = 78; // entre 0 y 100
// Clasificá la nota:
// 0-59 → Reprobado
// 60-69 → Suficiente
// 70-79 → Bien
// 80-89 → Muy bien
// 90-100 → Excelente

if(nota === 0 || nota <= 59)
{
    console.log("Reprobado");
}else if (nota >= 60 && nota <= 69)
{
    console.log("Suficiente");
}else if(nota >= 70 && nota <= 79)
{
    console.log("Bien");
}else if(nota >= 80 && nota <= 89)
{
    console.log("Muy bien");
}else if(nota >= 90 && nota <= 100)
{
    console.log("exelente");
}

//Mayor de tres numeros

const a = 45;
const b = 82;
const c = 37;

if(a > b && a > c ){
    console.log("A es mayor: ", a)

}else if(b > a && b > c)
{
    console.log("B es mayor: ", b)
}else{
    console.log("C es mayor: ", c)
}

let mayor = [45,82,37,99]; // creamos array de numero y con math.max recorremos para encontrar el mayor

console.log(Math.max(...mayor)); // ...mayor : recorremos el array y encontramos el numero mayor

