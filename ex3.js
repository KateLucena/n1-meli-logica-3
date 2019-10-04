//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
//  const pokemon = {
//      nome: 'Kakuna',
//      nome_japones: 'Cocoon',
//      n_johto: 28,
//      ev: 'Weedle',
//      acao: function(){
//          console.log('Sei lá o que esse pokemon faz kkkk')
//      }

// <<<<<<< HEAD
//  }
// pokemon.acao();
// =======
// const pokemon = {
//   nome: "Charmander",
//   nomeJapones: "Hitokage",
//   numeroJohto: 234,
//   evoluiDe: "Ovo",
//   fraseFoda: function() {
//     return "chaaaaarrrrr-maaaannn-deeeeerr"
//   }
// }

// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0
// // 2.
// // Printe no console a seguinte
// // frase: "Oi, meu nome é  < >.
// // e meu nome japones é < >."

// <<<<<<< HEAD
// console.log(`Oi, meu nome é ${pokemon.nome} e o meu nome japonês é ${pokemon.nome_japones}.`)
// =======
// pokemon.frase = function() {
//   return `Hello, my name is ${pokemon.nome}. And my name in Japanese ${pokemon.nomeJapones}.`
// }

// pokemon.frase()

// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0
// // 3.
// // Adicione uma nova propriedade ao
// // seu pokemon chamada `sabe_voar`
// // (ou algo do tipo) e defina
// // ela como `true` ou `false`.
// <<<<<<< HEAD
// pokemon.sabe_voar = true;
// =======
// pokemon["sabe_voar"] = true
// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0

// // 4.
// // Adicione um método ao seu pokemon
// // chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// // To voaaaaaando!".
// <<<<<<< HEAD
// pokemon.voar = function(){
//     if(pokemon.sabe_voar === true){
//         console.log('To voaaaaaando')
//     }else{
//         console.log('Desculpa, nao sei voar.')
//     }
    
// }
// console.log(pokemon)
// pokemon.voar()
// =======
// pokemon.fly = function() {
//   if (pokemon.sabe_voar) {
//     return `I'm flyyyyyying`
//   } else {
//     return "I can't fly"
//   }
// }

// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0
// // 5.
// // Adicione um método chamado
// // `action` ao seu pokemon
// // que retorna randomicamente uma
// // das Strings "FIGHT", "BAG" ou "RUN".

// <<<<<<< HEAD
// pokemon.action = function (){
//     const arr = ["FIGHT","BAG","RUN"];
//     let rand = arr[Math.floor(Math.random() * arr.length)]
//     console.log(rand)
// }

 
// pokemon.action();
// =======
// pokemon["action"] = function() {
//   let frase = ["Fight", "Bag", "Run"]
//   let rand = Math.floor(Math.random() * frase.length)
//   return frase[rand]
// }

// pokemon.action()

// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0
// // 6.
// // Adicione um método chamado
// // `pergunta` ao seu pokemon que printa
// // no console "O que o  < > vai fazer?" e
// // retorna o resultado do metodo
// // `acao`.
// <<<<<<< HEAD
// pokemon.pergunta = function(){
//     console.log(`O que o ${pokemon.nome} vai fazer?`)
//     return pokemon.action();
// }
// pokemon.pergunta();
// =======
// pokemon.ask = function() {
//   console.log(`What will ${pokemon.name} do?`)
//   return pokemon.do_something
// }

// >>>>>>> 4e842b9714951902526ae3a40832f1079b0df3d0
// // 7.
// // Printe todas as propriedades
// // do seu pokemon no console.
// for (const key in pokemon) {
//   console.log(key)
// }

// // 8.
// // Printe todas as propriedades
// // e seus respectivos valores no
// // console no seguinte formato:
// // <propriedade>: <valor>
// for (const key in pokemon) {
//   console.log(`Chave:${key}| valor:${pokemon[key]}`)
// }

//9 Faça uma função construtora de pokemon
function Pokemon(nome, nomeJapa, evolucao){
  this.nome = nome
  this.nome_japones = nomeJapa
  this.ev = evolucao
}
const pokemon1 = new Pokemon('charmander', 'hitokage', 'ovo')

console.log(pokemon1)