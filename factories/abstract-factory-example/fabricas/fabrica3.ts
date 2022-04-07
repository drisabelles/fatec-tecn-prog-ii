import tipoA from "../interfaces/tipoA";
import tipoB from "../interfaces/tipoB";
import ObjetoA3 from "../modelos/objetoA3";
import ObjetoB3 from "../modelos/objetoB3";
import FabricaAbstrata from "./fabricaAbstrata";

export default class Fabrica3 implements FabricaAbstrata {
    criarTipoA(): tipoA {
        let objA3 = new ObjetoA3()
        objA3.atributo1 = "valor a3"
        objA3.atributo2 = "valor a3"
        return objA3
    }
    criarTipoB(): tipoB {
        let objB3 = new ObjetoB3()
        objB3.atributo1 = "valor b3"
        objB3.atributo2 = "valor b3"
        return objB3
    }

}