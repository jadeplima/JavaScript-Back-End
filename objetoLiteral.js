const user = {
    nome: 'Juliana',
    email: 'ju@ju.com',
    nascimento: '2021/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'mariana',
    email: 'ma@ma.com',
    role: 'admin',
   criarCurso(){
       console.log('Curso criado')
   }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

