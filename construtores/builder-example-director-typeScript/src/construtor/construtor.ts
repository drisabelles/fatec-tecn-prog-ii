import Veiculo from "../modelo/veiculo";

export default interface Construtor {
    reset(): void
    obterObjeto(): Veiculo
}