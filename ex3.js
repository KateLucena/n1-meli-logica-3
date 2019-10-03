//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
 const pokemon = {
     nome: 'Kakuna',
     nome_japones: 'Cocoon',
     n_johto: 28,
     ev: 'Weedle',
     acao: function(){
         console.log('Sei lá o que esse pokemon faz kkkk')
     }

 }
pokemon.acao();
// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

console.log(`Oi, meu nome é ${pokemon.nome} e o meu nome japonês é ${pokemon.nome_japones}.`)
// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.sabe_voar = true;

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
pokemon.voar = function(){
    if(pokemon.sabe_voar === true){
        console.log('To voaaaaaando')
    }else{
        console.log('Desculpa, nao sei voar.')
    }
    
}
console.log(pokemon)
pokemon.voar()
// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

pokemon.action = function (){
    const arr = ["FIGHT","BAG","RUN"];
    let rand = arr[Math.floor(Math.random() * arr.length)]
    console.log(rand)
}

 
pokemon.action();
// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.
pokemon.pergunta = function(){
    console.log(`O que o ${pokemon.nome} vai fazer?`)
    return pokemon.action();
}
pokemon.pergunta();
// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor

//9 Faça uma função construtora de pokemon
