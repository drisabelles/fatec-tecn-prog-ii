import construtor from "../construtor/construtor";
import ConstrutorObjeto from "../construtor/construtorObjeto";
import Diretor from "./diretor";

export default class DiretorA implements Diretor {
    construir(construtor: construtor) {
        let construtorA = construtor as ConstrutorObjeto
        construtorA.setAtributo1('A')
        construtorA.setAtributo1('A')
        construtorA.setAtributo1('A')
        return construtorA.obterObjeto()
    }
}