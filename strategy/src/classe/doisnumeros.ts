import Entrada from "../interfaces/entrada";
import promptSync from "prompt-sync";

export default class DoisNumeros implements Entrada {
    private prompt = promptSync()
    obterEntradas(): number[] {
        let numeroA = this.prompt(`Por favor, insira o numero A: `)
        let numeroB = this.prompt(`Por favor, insira o numero B: `)
        let numeros = [Number.parseFloat(numeroA), Number.parseFloat(numeroB)]
        return numeros
    }
}