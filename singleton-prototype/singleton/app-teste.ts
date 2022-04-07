import Unica from "./singleton-teste2";

let obj = Unica.obterInstancia()
obj.atributo = '100'

let obj2 = Unica.obterInstancia()

let obj3 = Unica.obterInstancia()
obj3.atributo = '200'

console.log('Atributo: ' + obj.atributo)