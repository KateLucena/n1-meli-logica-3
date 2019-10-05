// use Map, filter, forEach, find e ou Reduce.

//1
const numbers = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
// retorne numeros multiplos de 3
const result = numbers.filter(function(num){
    return num % 3 === 0
})

// retorne numeros multiplos de 3 e de 5
const resultado = numbers.filter(function(num1){
    return num1 % 3 === 0 && num1 % 5 === 0
})

//2
const palavrinhas = [
  "bolacha",
  "biscoito",
  "bombom",
  "bala",
  "abestalhado",
  "MASSA",
  "pastilha"
]
// retorne palavras que tenham menos de 5 letras
const result1 = palavrinhas.filter(function(num2){
    return num2.length < 5
})

//3
const numbers1 = [3, 4, 5, 6, 6, 7]
// // itere pela array modificando todos os items, multiplicando eles por 3.
const novaNumbers = numbers1.map(function(num){
    return num * 2
})

// // depois prite quantos numeros são maiores que 10
const maior = novaNumbers.filter(function(num3){
    return num3 > 10
})

// // depois quantos são menores que 10.
const menor = novaNumbers.filter(function(num4){
    return num4 < 10
})

// // printe o numero menor que 10.
const menor1 = novaNumbers.find(function(num5){
    return num5 < 10
})

//4
const numbers2 = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
// calcule o valor total da soma dos items da array numbers
const soma = (acum, valor) => acum + valor
//console.log(numbers2.reduce(soma))
//5 -
const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// retore a mulher que tiver o user = 238
const nova = mulheres.filter(function(item){
    return item.user === 238
})

const nova1 = mulheres.find(function(item){
    return item.user === 238
})
// retorne o nome das mulheres que gostam de estudar
const estudar = mulheres.filter(function(item1){

    return item1.hobbies.indexOf('estudar') > -1
    
})
estudar.map(function(item){
    console.log(item.name)
})

// console.log(estudar)