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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(contrutor) {
    console.log(contrutor);
}
function decoratorVazio(_) { }
function logaClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado ...');
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = this;
            console.log('Antes do Super ...');
            _this = _super.apply(this, args) || this;
            console.log('Depois do Super ...');
            return _this;
        }
        return class_1;
    }(construtor));
}
var Eletrodomestico = (function () {
    function Eletrodomestico() {
        console.log('novo...');
    }
    Eletrodomestico = __decorate([
        logarObjeto,
        imprimivel
    ], Eletrodomestico);
    return Eletrodomestico;
}());
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
var eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
var ContaCorrente = (function () {
    function ContaCorrente(saldo) {
        this.saldo = saldo;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    ContaCorrente.prototype.getSaldo = function () {
        return this.saldo;
    };
    __decorate([
        naoNegativo
    ], ContaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar,
        __param(0, paramInfo)
    ], ContaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], ContaCorrente.prototype, "getSaldo", null);
    return ContaCorrente;
}());
var cc = new ContaCorrente(1000.50);
cc.sacar(500);
console.log(cc.getSaldo());
cc.sacar(1000);
console.log(cc.getSaldo());
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["__" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Invalido');
            }
            else {
                alvo["__" + nomePropriedade] = valor;
            }
        }
    });
}
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log("Alvo: " + alvo);
    console.log("Metodo: " + nomeMetodo);
    console.log("indice: " + indiceParam);
}
