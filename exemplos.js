const pessoa = {
    nome: "Kate",
    idade: 30,
    cidade: "Osasco",
    falar: function(){
        console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro na cidade de ${pessoa.cidade}.`)
    }
}
//pessoa.falar();
//console.log(Object.keys(pessoa));

// for (const item in pessoa){
//     console.log(item, pessoa[item])
// }

console.log(pessoa.hasOwnProperty('cpf'))
