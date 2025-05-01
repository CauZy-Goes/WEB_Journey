const pessoas = [
  "Jamilton", "Ana", "Maria"
]

let funcao = function(item, indice, arr){
  return {nome: item}
}

const novoArray = pessoas.map(funcao)
//console.log(novoArray)

// 1 dolar = 3 reais
const produtosDolar = [
  {produto: "Notebook", preco: 1200, moeda: "$"},
  {produto: "Celular", preco: 800, moeda: "$"},
]
/*
const novo = produtosDolar.map(function(item){
  let preco = item.preco * 3
  return {produto: "Notebook", preco: preco, moeda: "R$"}
})*/
const novo = produtosDolar.map(item => {
  let preco = item.preco * 3
  return {produto: "Notebook", preco: preco, moeda: "R$"}
})
console.log(novo)









