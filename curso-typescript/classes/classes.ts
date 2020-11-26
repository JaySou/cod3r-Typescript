class Data {

    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)

console.log(aniversario)



class DataEsperta {

    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){

    }
}

const aniversarioEsperto = new Data(3, 11, 1991)

console.log(aniversarioEsperto)

class Carro {

    private velocidadeAtual: number = 0

    constructor(public marca: string, private velocidadeMaxima: number = 200) {
        
    }

    private alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0; 
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}


class Ferrari extends Carro {
    
}




fetch('https://viacep.com.br/ws/01001000/json/')
    .then(res => res.json())
    .then(endereco => console.log(endereco))
    .catch(err => console.log(err)
    )