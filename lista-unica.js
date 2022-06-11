//Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica
//para analise de outros departamentos do banco.

const clientes = [
    {
        nome: 'Andre',
        cpf: '123456789',
        dependentes: [{
            nome: 'Sara',
            parentesco: 'filha',
            dataNascimento: '20/03/2011'
        },
        {
            nome: 'Samia',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }],
    },
    {
        nome: 'Juliana',
        cpf: '987654321',
        dependentes: [{
            nome: 'sophia',
            parentesco: 'filha',
            dataNascimento: '30/08/2020'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)

