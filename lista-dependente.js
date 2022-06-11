const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fone: ["11949461546", "11982066154"]
}

cliente.dependentes = [{
    nome: "Pablo",
    parentesco: "filho",
    dataNascimento: "20/02/2011 "
}]

cliente.dependentes.push({
    nome: "Lorrayne Maria",
    parentesco: "filha",
    dataNascimento: "04/01/2014"
})

//colocando um segundo parentesco com array
console.log(cliente)
 
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="04/01/2014")

console.log(filhaMaisNova[0].nome)