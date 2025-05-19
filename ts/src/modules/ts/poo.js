var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, idade, peso, altura) {
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }
    Object.defineProperty(Animal.prototype, "nome", {
        // Getters e setters
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            this._idade = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (valor) {
            this._peso = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (valor) {
            this._altura = valor;
        },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.descrever = function () {
        return "".concat(this._nome, " tem ").concat(this._idade, " anos, pesa ").concat(this._peso, "kg e mede ").concat(this._altura, "cm.");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade, peso, altura, raca) {
        var _this = _super.call(this, nome, idade, peso, altura) || this;
        _this._raca = raca;
        return _this;
    }
    Object.defineProperty(Cachorro.prototype, "raca", {
        // Getter e setter para raca
        get: function () {
            return this._raca;
        },
        set: function (valor) {
            this._raca = valor;
        },
        enumerable: false,
        configurable: true
    });
    Cachorro.prototype.descrever = function () {
        return "O cachorro da ra\u00E7a ".concat(this._raca, " com o nome de ").concat(this.nome, " tem ").concat(this.idade, " anos, pesa ").concat(this.peso, "kg e mede ").concat(this.altura, "cm.");
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro('', 0, 0, 0, '');
cachorro.nome = 'Rex';
cachorro.idade = 5;
cachorro.peso = 22;
cachorro.altura = 55;
cachorro.raca = 'Golden Retriever';
console.log(cachorro.descrever());
// Saída: O cachorro da raça Golden Retriever com o nome de Rex tem 5 anos, pesa 22kg e mede 55cm.
