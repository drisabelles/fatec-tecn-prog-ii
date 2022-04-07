import Objeto2 from "./prototype-class2"
import Objeto from "./prototype-class"
import Prototipo from "./prototype-interface"

let pessoa = new Objeto('Isabelle')
let pessoa2 = pessoa.copiar()

let outraCoisa = new Objeto2('Leandro')

let variavel: Prototipo

variavel = pessoa.copiar()