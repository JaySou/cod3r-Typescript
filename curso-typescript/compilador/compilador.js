"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
console.log("Canal: " + canal);
function saudar(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
