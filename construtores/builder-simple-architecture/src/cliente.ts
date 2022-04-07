import ConstrutorObjeto from "./construtor/construtorObjeto";

let construtor = new ConstrutorObjeto()
construtor.setAtributo2("B")
construtor.setAtributo1("A")
construtor.setAtributo3("C")
let objeto = construtor.obterObjeto()

console.log(objeto)