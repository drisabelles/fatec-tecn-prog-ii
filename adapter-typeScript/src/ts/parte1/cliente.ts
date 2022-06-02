import InformacaoCliente from "./informacaoCliente";

export default class Cliente {
    public metodo(informacao: InformacaoCliente): void {
        console.log(`Informacao no formato aceito pelo Cliente: `)
        console.log(`dado 1: ${informacao.dado1}`)
        console.log(`dado 2: ${informacao.dado2}`)
    }
}

