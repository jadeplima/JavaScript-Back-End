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



function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
    
}
oferecerSeguro(cliente)