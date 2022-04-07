import construtor from "../construtor/construtor";
import ConstrutorObjeto from "../construtor/construtorObjeto";
import Diretor from "./diretor";

export default class DiretorB implements Diretor {
    construir(construtor: construtor) {
        let construtorB = construtor as ConstrutorObjeto
        construtorB.setAtributo1('B')
        construtorB.setAtributo1('B')
        construtorB.setAtributo1('B')
        return construtorB.obterObjeto()
    }
}