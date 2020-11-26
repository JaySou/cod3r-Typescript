"use strict";
var Clientes;
(function (Clientes) {
    function falarMeuNome(nome) {
        return "Meu nome \u00E9 " + nome;
    }
    Clientes.falarMeuNome = falarMeuNome;
})(Clientes || (Clientes = {}));
