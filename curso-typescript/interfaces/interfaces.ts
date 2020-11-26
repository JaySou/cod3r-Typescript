interface IPessoa {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: IPessoa): void {

    console.log(`Olá ${pessoa.nome}`)
}

const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string){
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`)
    }
}

function mudarNome(pessoa: IPessoa): void {
    pessoa.nome = 'Joana'
}


saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Maria', idade: 27, altura: 1.75})
pessoa.saudar('Claudia')


// usandos em classes

class Cliente implements IPessoa {
    nome: string = ''
    ultimaCompra: Date = new Date()
    saudar(sobrenome: string) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Ana'
meuCliente.saudar('Olinda')
console.log(meuCliente.ultimaCompra)


interface IFunctionCalculo {
    (a: number, b:number) : number
}

let potencia: IFunctionCalculo

potencia = function(base: number, exp: number): number {

    // return Math.pow(base, exp)
    // return base ** exp
    return Array(exp).fill(base).reduce((t, a) => t * a)
}


console.log(potencia(2, 4))



// Herança em Interface
interface IA {
    a(): void
}

interface IB {
    b(): void
}

interface IABC extends IA, IB {

    c(): void
} 

class RealA implements IA {

    a(): void {}
}

class RealB implements IB {

    b(): void {}
}

class RealABC implements IABC {

    a(): void {}

    b(): void {}

    c(): void {}
}

abstract class AbstrataABD implements IA, IB {

    a(): void {}

    b(): void {}
}


interface Object {
    log(): void
}


Object.prototype.log = function(){
    console.log(this.toString())
}


const x: number = 1
const y: number = 2
const z: number = 3

x.log()
y.log()
z.log()
