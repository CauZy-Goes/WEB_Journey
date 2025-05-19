import { TipoAnimal, TipoCachorro } from './types/global.s'; // ajuste o caminho conforme sua estrutura

import { PooService } from './poo-service.js';

class Animal implements TipoAnimal {
  private _nome: string;
  private _idade: number;
  private _peso: number;
  private _altura: number;

  constructor(nome: string, idade: number, peso: number, altura: number) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
  }

  // Getters e setters
  get nome(): string {
    return this._nome;
  }

  set nome(valor: string) {
    this._nome = valor;
  }

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    this._idade = valor;
  }

  get peso(): number {
    return this._peso;
  }

  set peso(valor: number) {
    this._peso = valor;
  }

  get altura(): number {
    return this._altura;
  }

  set altura(valor: number) {
    this._altura = valor;
  }

  descrever(): string {
    return `${this._nome} tem ${this._idade} anos, pesa ${this._peso}kg e mede ${this._altura}cm.`;
  }
}

class Cachorro extends Animal implements TipoCachorro {
  private _raca: string;

  constructor(
    nome: string,
    idade: number,
    peso: number,
    altura: number,
    raca: string,
  ) {
    super(nome, idade, peso, altura);
    this._raca = raca;
  }

  // Getter e setter para raca
  get raca(): string {
    return this._raca;
  }

  set raca(valor: string) {
    this._raca = valor;
  }

  descrever(): string {
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

console.log(
  `O animal mas pesado é o ${PooService.compararPeso(animal, cachorro)?.nome}`,
);
