const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1234567890',
    email: 'andre@email.com',
    fones: ['11949461546' , '11982066154'],
    dependentes: [
        {
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNascimento: '20/03/2011' },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }       
        
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}
//puxando relatorio.
let relatorio="";

for ( let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue 
    } else {
        relatorio += `${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)