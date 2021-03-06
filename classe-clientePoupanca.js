class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email 
        this.cpf = cpf 
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupança){
        super(nome, email, cpf, saldo)
        this.saldoPoupança = saldoPoupança
    }
    
    depositarPoupança(valor){
        this.saldoPoupança += valor 
    }

}

const andre = new ClientePoupanca("Andre", "andre@email.com", "123456789", 100, 200)
console.log(andre)

andre.depositar(50)
andre.depositarPoupança(100)

console.log(andre)