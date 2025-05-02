/*
const numeros = [
  2,3,5
]

//primeira -> 2 +  3 = 5
//segunda -> 5 + 5 = 10

const funcao = function(acumulador, atual, i){
  console.log("i:"+i)
  console.log("ac:"+acumulador)
  console.log("a:"+atual)
  console.log("-----")
  return acumulador + atual
  
}
const resultado = numeros.reduce(funcao)
console.log(resultado)

const produtos = [
  {nome: "Notebook", promocao: true},
  {nome: "Celular", promocao: false},
  {nome: "Mouse", promocao: false},
]ds

const produtosPromo = produtos.map(
  produto => produto.promocao
)
console.log(produtosPromo)
const funcao = function(acumulador, atual){
  console.log("ac:"+acumulador)
  console.log("a:"+atual)
  console.log("-----")
  return acumulador || atual ///true
}
const novo = produtosPromo.reduce(funcao)
console.log(novo)
if(novo) console.log("Tem promocao")
*/

const lista = [
  "Jamilton", "Ana", "Pedro"
]
const funcao = (acumulado, atual) => acumulado += `<li>${atual}</li>`

let listaHtml = lista.reduce(
  funcao, ""
)



console.log(listaHtml)











