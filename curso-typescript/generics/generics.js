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
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
var avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(function (elemento) { return console.log(elemento); });
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', '2', '3']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
var chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma Coisa'));
var CData = (function () {
    function CData(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return CData;
}());
var OperacaoBinaria = (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
var SomaBinaria = (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomaBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log(new SomaBinaria(1, 3).executar());
var DiferencaEntreDatas = (function (_super) {
    __extends(DiferencaEntreDatas, _super);
    function DiferencaEntreDatas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiferencaEntreDatas.prototype.getTime = function (data) {
        var dia = data.dia, mes = data.mes, ano = data.ano;
        return new Date(mes + "/" + dia + "/" + ano).getTime();
    };
    DiferencaEntreDatas.prototype.executar = function () {
        var t1 = this.getTime(this.operando1);
        var t2 = this.getTime(this.operando2);
        var diferenca = Math.abs(t1 - t2);
        var dia = 1000 * 60 * 60 * 24;
        return Math.ceil(diferenca / dia) + " dia(s)";
    };
    return DiferencaEntreDatas;
}(OperacaoBinaria));
var d1 = new CData(1, 2, 2020);
var d2 = new CData(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
