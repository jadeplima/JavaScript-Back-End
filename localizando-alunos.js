const alunos = ['Pablo', 'Lorrayne', 'Jade', 'Gabriela']
const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos,mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', a sua media é' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota('nemo'))