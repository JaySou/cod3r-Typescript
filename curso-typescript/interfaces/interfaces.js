"use strict";
function saudarComOla(pessoa) {
    console.log("Ol\u00E1 " + pessoa.nome);
}
var pessoa = {
    nome: 'João',
    idade: 27,
    saudar: function (sobrenome) {
        console.log("Ol\u00E1 meu nome \u00E9 " + this.nome + " " + sobrenome);
    }
};
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Claudia');
var Cliente = (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Ol\u00E1 meu nome \u00E9 " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Ana';
meuCliente.saudar('Olinda');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce(function (t, a) { return t * a; });
};
console.log(potencia(2, 4));
var RealA = (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealB = (function () {
    function RealB() {
    }
    RealB.prototype.b = function () { };
    return RealB;
}());
var RealABC = (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
var AbstrataABD = (function () {
    function AbstrataABD() {
    }
    AbstrataABD.prototype.a = function () { };
    AbstrataABD.prototype.b = function () { };
    return AbstrataABD;
}());
Object.prototype.log = function () {
    console.log(this.toString());
};
var x = 1;
var y = 2;
var z = 3;
x.log();
y.log();
z.log();
