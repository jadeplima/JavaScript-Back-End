import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User ("Lorrayne", "Lorrayne@lorrayne.com", '28/08/2000')
console.log(novoUser.exibirInfos())

//const novoAdmin = new Admin("Gabriela", "gabi@gabi.com", '30/09/1991')
//console.log(novoAdmin.nome)
//novoAdmin.nome = 'Bento'
//console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@g.com', '30/06/1991')
console.log(novoDocente.exibirInfos())