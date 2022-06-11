const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email: "andre@email.com",
    fone: ["11949461546", "11982066154"]
}
//acessar telefone
cliente.fone.forEach(fone => console.log(fone))