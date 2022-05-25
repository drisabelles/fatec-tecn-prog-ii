import ObjetoA from "./objetoA";
import ObjetoB from "./objetoB";
import Visitante from "./visitante";
import Elemento from "./elemento";

export default class Visitante1 implements Visitante {
    visitar(objeto: Elemento): void {
        console.log('Visitante 1');
        if (objeto instanceof ObjetoA) {
            console.log('Processando tipo A');
        } else if (objeto instanceof ObjetoB) {
            console.group('Processando tipo B');
        } else {
            throw new Error("Sem implementação para o tipo de objeto.");
        }
    }
}