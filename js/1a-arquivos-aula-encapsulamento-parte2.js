// Pilar - Encapsulamento
/*
class Carro {
  constructor(){
    this.modelo = "Gol"
    this.cor = "Vermelho"
  }
  
  frear(){
    /* freio com tecnologia a disco
    .
    .
    .
    .
    .
    .
    .
    .
    .
    
    console.log("parar o carro")
  }
  
}

const carro = new Carro()
carro.frear()
*/

// Encapsulamento, modificadores de acesso e getters e setter
class ContaBancaria {

  constructor() {
    this._numeroConta = 0
    this._saldo = 0
  }

  sacar(valorSaque) {
    this._saldo = this._saldo - valorSaque
  }

  depositar(valorDeposito) {
    this._saldo = this._saldo + valorDeposito
  }

  get saldo() {
    return this._saldo
  }
  set saldo(novoSaldo) {
    if (novoSaldo > 0) {
      this._saldo = novoSaldo
    }
  }
  get numeroConta() {
    //Verificar se o usuario está logado
    return "Número: " + this._numeroConta
  }
  set numeroConta(numero) {
    if (numero > 0) {
      this._numeroConta = numero
    }
  }

}

const conta = new ContaBancaria()
//conta.numeroConta = 60
//conta.numeroConta = 60
conta.saldo = 500 // segura
conta.sacar(50) //450
conta.depositar(100) //550

console.log(conta.saldo)