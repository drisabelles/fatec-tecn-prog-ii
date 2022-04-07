import Construtor from "../construtor/construtor";
import Objeto from "../modelo/objeto";

export default interface Diretor {
    construir(construtor: Construtor): Objeto
}

