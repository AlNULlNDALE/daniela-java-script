let pessoa = {
    nome: 'Dani',
    sobrenome: 'Farina',
    idade: 35,
    profissao: 'Assistente Administrativo',
    empresa: 'Polícia Militar',
    ativo: true
};

for (let listaPessoa in pessoa){
    console.log(pessoa[listaPessoa]);
}; 

if ('nada' in pessoa){
    console.log('A chave IDADE existe em pessoa');
};
