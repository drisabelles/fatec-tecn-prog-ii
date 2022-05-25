import Elemento from "./elemento"

export default interface Visitante {
    visitar(objeto: Elemento): void
}