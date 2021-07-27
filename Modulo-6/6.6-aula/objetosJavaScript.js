let pessoa = {
    nome: 'Dani',
    sobrenome: 'Farina',
    idade: 35,
    profissao: 'Assistente Administrativo',
    empresa: 'Polícia Militar'
};

// let listarProfissao = pessoa.profissao; //notação mais rápida

let listarProfissao = pessoa['profissao']; //notação para quando a propriedade é um número, e não uma string

console.log(listarProfissao);