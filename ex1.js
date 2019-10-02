// //1 - Dada a array
// //Itere pela array imprimindo na tela todos os dados que incluem nela
const xx = [23, 43, 63, 73, 83, 93, 102]
for (let i = 0; i < xx.length; i++) {
  console.log(xx[i])
}

<<<<<<< HEAD
function ex1 (){
    const xx = [23, 43, 63 ,73, 83, 93, 102];
    for(let i = 0;i < xx.length; i++){
        console.log(xx[i]);
    }
}

// 2- Dada a array const doces = ['sorvete', 'pirulito', 'bombom'];
// Adicione um novo item de sua escolha no começo dessa array.
function ex2(){
const doces = ['sorvete', 'pirulito', 'bombom'];
doces.unshift('bala');
console.log(doces);
}
=======
// // 2- Dada a array
// // Adicione um novo item de sua escolha no começo dessa array.
const doces = ["sorvete", "pirulito", "bombom"]
doces.unshift("chocolate")
console.log(doces)
>>>>>>> b5dbb7896d7ae64addf6a3eee6d5256942f1f262

// 3 Dada a array
// Adicione um novo item de sua escolha no final dessa array.
const doces = ["sorvete", "pirulito", "bombom"]
doces.push("maça")
console.log(doces)

<<<<<<< HEAD
function ex3(){
const doces = ['sorvete', 'pirulito', 'bombom'];
doces.push('chiclete');
console.log(doces);
}
//  4- Dada a array const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
// inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'
function ex4(){
    const bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days'];
    bandasEmo.reverse();
    console.log(bandasEmo);
    }
// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71
function ex5(){
    const array = [23, 45, 13, 71];
    array.splice(2,0,11);
    console.log(array);
    }   

//6-  Dada a array const array = [23, 45, 13, 17];
// Tire o número 45 da array.
function ex6(){
    const array = [23, 45, 13, 17];
    array.splice(1,1);
    console.log(array);
    } 
// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela
function ex7(){
    const num = [];
    for(let i = 0; i < 20; i++){
        if(i % 2 == 1){
            num.push(i);
        }
        
    }
    console.log(num);
    } 
    ex9a();
// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.
function ex8 (){
const x = [23, 43, 63 ,73, 83, 93, 102];
const ar = [];
let soma;
for(let i = 0; i < x.length; i++){
    soma = x[i] + 2;
    console.log(soma);
    ar.push(soma);
    
}
console.log(ar);
}
// 9- dada a array const lista = [56, 89, 34, 12, 23, 55, 9]
// ordene a lista .
function ex9(){
    const lista = [56, 89, 34, 12, 23, 55, 9];
    lista.sort(function(a,b){return a-b});
    console.log(lista);

}

function ex9a(){
    const lista = [56, 89, 34, 12, 23, 55, 9];
    for (let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista.length; j++){
            if(lista[j] > lista[j+1]){
                const aux = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = aux
            }
        }
    }
    console.log(lista)
}
=======
// //  4- Dada a array
// // inverta a ordem dos items e log na tela : 'dance of days', 'blink182', 'linking park', 'fresno'
const bandasEmo = ["fresno", "linkin park", "blink182", "dance of days"]
console.log(bandasEmo.reverse())
console.log(bandasEmo)

// // 5 - Dada a array
// // Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71
const array = [23, 45, 13, 71]
array.splice(2, 0, 11)
console.log(array)

// //6-  Dada a array
// // Tire o número 45 da array.
const array = [23, 45, 13, 17]
array.splice(1, 1)
console.log(array)

// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// // depois imprima os valores na tela
let count = 0
const array = []
for (let i = 1; count < 10; i++) {
  if (i % 2 !== 0) {
    array.push(i)
    count++
  }
}
console.log(array)

// // 8- Dada a array x
// Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.
const x = [23, 43, 63, 73, 83, 93, 102]
const novaArray = []
for (let i = 0; i <= x.length - 1; i++) {
  novaArray.push(x[i] + 2)
}
console.log(novaArray)

// 9- ordene a array lista
const lista = [56, 89, 34, 12, 23, 55, 9]
lista.sort(function(a, b) {
  return a - b
})
console.log(lista)

//BUBBLE SORT
for (let i = 0; i < lista.length; i++) {
  for (let j = 0; j < lista.length; j++) {
    if (lista[j] > lista[j + 1]) {
      const aux = lista[j]
      lista[j] = lista[j + 1]
      lista[j + 1] = aux
    }
  }
}
console.log(lista)

// Exercício Extra:
// matriz 5x5
const arr = []
let count = 1
for (let i = 0; i < 5; i++) {
  const linha = []
  for (let j = 0; j < 5; j++) {
    linha[j] = count
    count++
  }
  arr[i] = linha
}
console.log(arr)
>>>>>>> b5dbb7896d7ae64addf6a3eee6d5256942f1f262
