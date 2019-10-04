// const pessoa = {
//     nome: "Kate",
//     idade: 30,
//     cidade: "Osasco",
//     falar: function(){
//         console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro na cidade de ${pessoa.cidade}.`)
//     }
// }
// //pessoa.falar();
// //console.log(Object.keys(pessoa));

// // for (const item in pessoa){
// //     console.log(item, pessoa[item])
// // }

// console.log(pessoa.hasOwnProperty('cpf'))
// 


// function Pokemon(nome, nomeJapa, evolucao){
//     this.nome = nome
//     this.nome_japones = nomeJapa
//     this.ev = evolucao
//   }
//   const pokemon1 = new Pokemon('charmander', 'hitokage', 'ovo')
  
//   console.log(pokemon1.nome)

const complex = [
    {user:234, name: 'Marcia', idade:40, hobbies: ['dançar', 'comer', 'falar']},
    {user:235, name: 'Lorena', idade:20, hobbies: ['dançar', 'assistir tv', 'estudar']},
    {user:236, name: 'Patricia', idade:24, hobbies: ['correr', 'acampar', 'surfar']},
    {user:237, name: 'Mariana', idade:15, hobbies: ['skate', 'bicicleta', 'break dance']},
    {user:238, name: 'Isis', idade:34, hobbies: ['ler', 'escrever', 'discutir']},
    {user:239, name: 'Pietra', idade:23, hobbies: ['jogar dominó', 'sinuca', 'cartas']}
]
complex[complex.length -1];
console.log(complex[complex.length -1].hobbies[0])