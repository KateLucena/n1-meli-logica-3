// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)
function Terreno(largura, comprimento){
    this.largura = largura
    this.comprimento = comprimento
    this.area = largura * comprimento
    
}
// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.
Terreno.prototype.calcularPreco = function(){
    return this.preco = this.area * 1000
}
Terreno.prototype.mostrarInfos = function(){
    //return this.info = "Area: " + this.area + "," + "Preço: " + this.preco
    console.log("Area: " + this.area + "," + "Preço: " + this.preco)
}

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
const t1 = new Terreno(1000,2000)
const t2 = new Terreno(10,20)
const t3 = new Terreno(50,90)
const t4 = new Terreno(45,60)
const t5 = new Terreno(90,100)


// 4 - use a função calcular preco para que todas as instancias tenham seus precos.
t1.calcularPreco();
t2.calcularPreco();
t3.calcularPreco();
t4.calcularPreco();
t5.calcularPreco();

// t1.mostrarInfos();
// t2.mostrarInfos();
// t3.mostrarInfos();
// t4.mostrarInfos();
// t5.mostrarInfos();

// 5 - crie uma array vazia chamada terrenos.
const terrenos = []
// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.
terrenos.push(t1,t2,t3,t4,t5);


//console.log(terrenos)


// 7 - Imprima na tela o último terreno da array terrenos.
//console.log(terrenos[terrenos.length - 1])
// 8 - Imprima a area do terceiro item da array terrenos
// console.log(terrenos[2].area)
// // 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.
// for (const item of terrenos){
//      console.log(item.mostrarInfos())
// }

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.
// function ordenaTerrenos(arrTerrenos){
//     const ordenados = arrTerrenos.sort(function(a,b){
//         return a.preco - b.preco
//     })
//     console.log(ordenados)
// }
// ordenaTerrenos(terrenos)
// 11 - Crie uma função que Imprima o mais barato
console.log(ordenados[0], ordenados[ordenados.lenght - 1])
// 12 - Crie uma função que Imprima o mais caro.

function Terreno(largura, comprimento) {
  this.largura = largura
  this.comprimento = comprimento
  this.area = largura * comprimento
}

Terreno.prototype.calcularPreco = function() {
  this.preco = this.area * 1000
}

Terreno.prototype.mostrarInfos = function() {
  console.log(`a area é ${this.area} e o preco é: ${this.preco}`)
}

const t1 = new Terreno(30, 20)
const t2 = new Terreno(10, 50)
const t3 = new Terreno(34, 200)
const t4 = new Terreno(33, 19)
const t5 = new Terreno(3, 2)

t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()

const terrenos = []
terrenos.push(t1, t2, t3, t4, t5)

// console.log(terrenos)
// console.log(terrenos[2])

// for (const item of terrenos) {
//   console.log(item.mostrarInfos()
// }

// for (let i = 0; i < terrenos.length; i++) {
//   console.log(terrenos[i].mostrarInfos())
// }

function ordenaTerrenos(arrTerrenos) {
  const ordenados = arrTerrenos.sort(function(a, b) {
    return a.preco - b.preco
  })
  console.log(ordenados[0], ordenados[ordenados.length - 1])
}

ordenaTerrenos(terrenos)
