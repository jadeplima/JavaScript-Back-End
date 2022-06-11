const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fone: ["11949461546", "11982066154"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: 'filha',
            dataNascimento: '20/03/2011'
        },
        {
            nome: 'Samia maria',
            parentesco: 'filha',
            dataNascimento: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor 
    }
}
//depositar para o cliente
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)