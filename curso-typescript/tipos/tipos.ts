
// string
let nome: string = 'João'
console.log(nome);

// numbers
let idade: number = 27
idade = 27.5
console.log(idade);

// boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies);



// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)


//array
let hobbies: any[] = ["Cozinhar", "Praticar Esporte"]
console.log(hobbies[0]);
console.log(typeof hobbies);


// tupla
let endereco: [string, number] = ["Av Principal", 99,]
console.log(endereco);


// enum
enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul // 2
}

let minhaCor = Cor.Cinza
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro);
carro = { marca: 'BMW', ano: 2019}
console.log(carro);


// funcao
function retornaMeuNome(): string{
    return nome
}

console.log(retornaMeuNome());

function digaOi(): void{
    console.log('Oi')
}

digaOi();

function multiplicar(numA: number, numB:number): number {

    return numA * numB
}

console.log(multiplicar(2, 3))

// tipo funcao
let calculo: (numeroA: number, numeroB: number) => number
calculo = multiplicar

calculo(2, 6)


// Objetos
let usuario: { nome: string, idade: number } = {
    nome: "João",
    idade: 27
}


console.log(usuario)


// Desafio

// Alias
type Funcionario = {
    supervisor: string[], 
    baterPonto: (hora: number) => string 
}

let funcionario: Funcionario = {

    supervisor: ['João', 'Maria', 'Bruna'],
    baterPonto(hora: number) : string {

        return hora <= 8 ? 'Ponto Normal' : 'Fora do Horario'
    }
}

console.log(funcionario.baterPonto(9))


// Union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`);


// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco < 0) {
            falha('Preço invalido')
        }
    }
}

produto.validarProduto()


// Desafio 2

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}


let correntista: Correntista = {
    nome: 'João',
    contaBancaria: {
        saldo: 1200,
        depositar(valor: number): void {
            this.saldo += valor
        }
    },
    contatos: ['123456789', '987654321']
}

console.log(correntista.nome)
console.log(correntista.contaBancaria.saldo)
correntista.contaBancaria.depositar(125)
console.log(correntista.contaBancaria.saldo)

