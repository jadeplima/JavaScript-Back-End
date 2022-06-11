const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fone: ["11949461546", "11982066154"]
}

cliente.dependentes = {
    nome: "Pablo",
    parentesco: "filho",
    dataNascimento: "20/02/2011 "
}
//adicionando dependentes
console.log(cliente)

//alterando nome do dependente
cliente.dependentes.nome = "Pablo Silva"

console.log(cliente)