//Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças.

function Cliente(nome , cpf , email , saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

function ClientePoupanca(nome, cpf , email, saldo,saldoPoup)
{   //o call ele esta indo no construtor cliente e chamando as propriedades de dentro dele para dentro do cliente poupança
    Cliente.call(this, nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca("Ju", "123456789", "ju@email.com", 100, 200)
console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju.saldoPoup)