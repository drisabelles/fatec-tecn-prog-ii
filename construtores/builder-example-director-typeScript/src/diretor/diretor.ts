import Construtor from "../construtor/construtor";
import Veiculo from "../modelo/veiculo";

export default interface Diretor {
    construir(construtor: Construtor): Veiculo
}