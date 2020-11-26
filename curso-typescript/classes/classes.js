"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1991);
console.log(aniversario);
var DataEsperta = (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
var aniversarioEsperto = new Data(3, 11, 1991);
console.log(aniversarioEsperto);
var Carro = (function () {
    function Carro(marca, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var Ferrari = (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ferrari;
}(Carro));
fetch('https://viacep.com.br/ws/01001000/json/')
    .then(function (res) { return res.json(); })
    .then(function (endereco) { return console.log(endereco); })
    .catch(function (err) { return console.log(err); });
