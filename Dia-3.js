// // BUCLES 

// for(let i=1; i < 10; i++)
// {
//     console.log(i);
// }
// //while
// let i =0;

// while(i < 5)
// {
//     console.log(i)
//     i++
// }

// // for ...for -para recorrer arrays

// const numeros =[1,2,3,4,5];
// for (const numero of numeros)
// {
//     console.log(numero);

// }

// //forEach - tambien para arrays
// numeros.forEach(numero =>{
//     console.log(numero);
// });

// 1- tabla de multiplicar

// const numero = 7;

// for(let i=1; i <= 10; i++)
// {
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

// -2 FIZZBUZZ
// Del 1 al 50:
// Si es divisible por 3 → mostrá "Fizz"
// Si es divisible por 5 → mostrá "Buzz"
// Si es divisible por ambos → mostrá "FizzBuzz"
// Si no → mostrá el número

// tu código acá...


// for(let i = 1; i <= 50; i++)
// {
//     if(i % 3 === 0 && i % 5 === 0 )
//     {
//         console.log(`${i}: FizzBuss`);
//     }else if(i % 3===0)
//     {
//         console.log(`${i}: Fizz`);
//     }else if(i % 5 === 0)
//         {
//             console.log(`${i}: Buzz`);
//         }else {
//             console.log(i)
//         }
        
//     }

    //3 - Sumar array

//     const numero = [10, 25, 8, 42, 15, 3, 67];
//     let suma =0;
// numero.forEach(function(numero)  {
//     suma += numero;
// })
// console.log(suma)

//4 - numero primo

// const numero = 17;
// const esPrimo = true;
// const noEsPrimo = false;

// for(let i = 2; i <= 17; i++)
// {
//     if(numero % i == 0)
//     {
//      console.log(`${i}:${esPrimo}`);
//     }else
//     {
//         console.log(`${i}: ${noEsPrimo}`)
//     }
// }

//5- PIRAMIDE DE ASTERICOS


for(let i = 1; i <= 20; i++)
{
 let linea = "";
 for(let q = 1; q <= i; q++)
 {
    linea += "*";
 }
 console.log(linea)
 
}