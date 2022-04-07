import Objeto from "../modelo/objeto"

export default interface Construtor {
    reset(): void
    obterObjeto(): Objeto
}

