import { PooService } from './poo-service.js';
class Animal {
    _nome;
    _idade;
    _peso;
    _altura;
    constructor(nome, idade, peso, altura) {
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }
    // Getters e setters
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
    get peso() {
        return this._peso;
    }
    set peso(valor) {
        this._peso = valor;
    }
    get altura() {
        return this._altura;
    }
    set altura(valor) {
        this._altura = valor;
    }
    descrever() {
        return `${this._nome} tem ${this._idade} anos, pesa ${this._peso}kg e mede ${this._altura}cm.`;
    }
}
class Cachorro extends Animal {
    _raca;
    constructor(nome, idade, peso, altura, raca) {
        super(nome, idade, peso, altura);
        this._raca = raca;
    }
    // Getter e setter para raca
    get raca() {
        return this._raca;
    }
    set raca(valor) {
        this._raca = valor;
    }
    descrever() {
        return `O cachorro da raça ${this._raca} com o nome de ${this.nome} tem ${this.idade} anos, pesa ${this.peso}kg e mede ${this.altura}cm.`;
    }
}
const cachorro = new Cachorro('', 0, 0, 0, '');
cachorro.nome = 'Rex';
cachorro.idade = 5;
cachorro.peso = 22;
cachorro.altura = 55;
cachorro.raca = 'Golden Retriever';
const animal = new Animal('', 0, 0, 0);
animal.nome = 'Brutos';
animal.idade = 10;
animal.peso = 12;
animal.altura = 35;
console.log(cachorro.descrever());
console.log(animal.descrever());
console.log(`O animal mas pesado é o ${PooService.compararPeso(animal, cachorro)?.nome}`);
