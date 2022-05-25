import ObjetoA from "./objetoA";
import ObjetoB from "./objetoB";
import Visitante from "./visitante";


export default class Visitante2 implements Visitante{
    visitar(objeto: ObjetoA): void;
    visitar(objeto: ObjetoB): void;
    visitar(objeto: unknown): void {
        if (objeto instanceof ObjetoA) {
            console.log('Processando o tipo A')
        } else if (objeto instanceof ObjetoB) {
            console.log('Processando o tipo B')
        } else {
            throw new Error ('Sem implementação para o tipo especificado')
        }
    }
    
}