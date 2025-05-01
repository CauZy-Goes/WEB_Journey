const usuarios = [
  {nome: "Jamilton", idade: 32},
  {nome: "Ana", idade: 16},
  {nome: "Maria", idade: 40}
]
const funcao = function(item,i,arr){
  return item.idade >= this.filtro
}
const filtro = {
  filtro: 35
}
const usuariosMaiorIdade = usuarios.filter(funcao, filtro)
//console.log(usuariosMaiorIdade)


const carros = [
  {nome: "Gol", marca: "volkswagem"},
  {nome: "iX35", marca: "hyundai"},
  {nome: "Santa Fé", marca: "hyundai"},
  {nome: "Polo", marca: "volkswagem"}
]

const carrosFiltrado = carros.filter(
  carro => carro.marca == "hyundai"
)
console.log(carros)








