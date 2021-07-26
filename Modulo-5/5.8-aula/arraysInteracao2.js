/* let eletrodomesticos = [
    'TV',
    'Geladeira',
    'Fogão',
    'Microondas'
];

eletrodomesticos.forEach((listaEletrodomesticos) => {
    console.log(listaEletrodomesticos);
}); */

let eletrodomesticos = [
    { eletronico: 'TV', preco: 1500, setor: 'Sala' },
    { eletronico: 'Geladeira', preco: 2500, setor: 'Cozinha' },
    { eletronico: 'Fogão', preco: 850, setor: 'Cozinha' },
    { eletronico: 'Microondas', preco: 300, setor: 'Cozinha' }
];

/* const precoProdutos = eletrodomesticos.map((item) => {
    return item.preco;
});

/* console.log(precoProdutos);

const comprarEletronicos = eletrodomesticos.filter(eletrodomestico => eletrodomestico.preco >= 1000);
console.log(comprarEletronicos); */

/* let reais = [27.86, 71.95, 36.5];
let somarValores = reais.reduce((total, valor) => { //o reduce vai em cada elemento da array fazendo o que foi pedido
    return total + valor;
});

console.log(somarValores);  */

/* const produtoBarato = 500;
const promocaoEletro = eletrodomesticos.every(eletronico => eletronico.preco >= produtoBarato);
console.log(promocaoEletro); */

// console.log(eletrodomesticos.every(eletronico => eletronico.preco >= 500)); 
//every verifica uma condição em todos os elementos, e se der true pra todos, ele retorna true. Se der false pra algum deles, ele retorna false.

/* const produtoCaro = 1000;
const eletronicoCaro = eletrodomesticos.some(eletronico => eletronico.preco >= produtoCaro);
console.log(eletronicoCaro); */
//some verifica se pelo menos um/alguns passam na condição que eu quero

/* const produtosCozinha = eletrodomesticos.find(eletronico => eletronico.setor == 'Cozinha');
console.log(produtosCozinha); */

const idades = [30, 18, 18, 20];
const maiorIdade = 18;

const ehAdulto = idades.findIndex(idade => idade >= maiorIdade);
console.log(ehAdulto);