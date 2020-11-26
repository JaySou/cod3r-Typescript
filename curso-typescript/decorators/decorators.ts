
function logarClasse(contrutor: Function) {
    console.log(contrutor)
}

function decoratorVazio(_:Function) { }

function logaClasseSe(valor: true) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string, b?: number}) {
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}


type Constructor = { new(...args: any[]): {} }

function logarObjeto(construtor: Constructor){
    console.log('Carregado ...')
    return class extends construtor {
        constructor(...args: any){
            console.log('Antes do Super ...')
            super(...args)
            console.log('Depois do Super ...')

        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()


interface Eletrodomestico {

    imprimir?(): void
}

// @decorator({a: 'Texto', b: 2})
// @logarClasse
// @logaClasseSe(true)
@logarObjeto
@imprimivel
class Eletrodomestico {
    
    constructor() {
            console.log('novo...')
    }
}


function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}


// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()



class ContaCorrente {
    
    @naoNegativo
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {


        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        } 
        else {
            return false
        } 
    }

    @congelar
    getSaldo() {
        return this.saldo
    }

}

const cc = new ContaCorrente(1000.50)
cc.sacar(500)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 600 
// }
cc.sacar(1000)
console.log(cc.getSaldo())


// decorator de metodo
// Object.freeze
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}


// decorator de atributo
function naoNegativo(alvo: any, nomePropriedade: string) {

    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["__"+nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error('Saldo Invalido')
            } 
            else {
                alvo["__"+nomePropriedade] =  valor
            }
        }
    })
}


// decorator de parametro
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {

    console.log(`Alvo: ${alvo}`)
    console.log(`Metodo: ${nomeMetodo}`)
    console.log(`indice: ${indiceParam}`)
}