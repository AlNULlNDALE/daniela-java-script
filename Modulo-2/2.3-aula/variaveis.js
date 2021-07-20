/* var num1 = 10;
var num2 = 20;
var total = num1 + num2;
console.log(total);


let saudacao = "Olá, programadoras"; //let:variável local

if (true){
    let saudacao = "Quero aprender JS";
    console.log(saudacao);
}

console.log(saudacao); */

const cidade = "Uberlândia"; //const:quando precisamos de variáveis fora de um escopo
function estado(){
    const cidade = "Araguari";
    console.log(cidade);
}

estado();
console.log(cidade);