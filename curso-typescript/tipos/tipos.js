"use strict";
var nome = 'João';
console.log(nome);
var idade = 27;
idade = 27.5;
console.log(idade);
var possuiHobbies = false;
console.log(possuiHobbies);
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
var hobbies = ["Cozinhar", "Praticar Esporte"];
console.log(hobbies[0]);
console.log(typeof hobbies);
var endereco = ["Av Principal", 99,];
console.log(endereco);
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
var calculo;
calculo = multiplicar;
calculo(2, 6);
var usuario = {
    nome: "João",
    idade: 27
};
console.log(usuario);
var funcionario = {
    supervisor: ['João', 'Maria', 'Bruna'],
    baterPonto: function (hora) {
        return hora <= 8 ? 'Ponto Normal' : 'Fora do Horario';
    }
};
console.log(funcionario.baterPonto(9));
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'sabão',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço invalido');
        }
    }
};
produto.validarProduto();
var correntista = {
    nome: 'João',
    contaBancaria: {
        saldo: 1200,
        depositar: function (valor) {
            this.saldo += valor;
        }
    },
    contatos: ['123456789', '987654321']
};
console.log(correntista.nome);
console.log(correntista.contaBancaria.saldo);
correntista.contaBancaria.depositar(125);
console.log(correntista.contaBancaria.saldo);
