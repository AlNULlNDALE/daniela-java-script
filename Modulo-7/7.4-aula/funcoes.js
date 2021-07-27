 /*function mostrarNome(){
     return console.log('Parabéns! Você chegou ao final do curso de JavaScript');
 };

 mostrarNome(); */

 /*function multiplicarNumeros(a, b){
     return a * b;
 };

 let resultadoFinal = multiplicarNumeros(3,2);
 console.log(resultadoFinal);*/

 let numeros = [1,2,3,4,5,6,7,8,9,10];

 function mostrarNumerosImpares(){     // aqui temos uma função anônima: sem parâmetros.
     for (let i = 0; i < numeros.length; i++){
     if (numeros[i] % 2 !== 0){
         console.log(numeros[i]);
     };
 };
 };
 mostrarNumerosImpares();