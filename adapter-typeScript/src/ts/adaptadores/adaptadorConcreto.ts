import InformacaoCliente from "../parte1/informacaoCliente";
import Servico from "../parte2/servico";
import Adaptador from "./adaptador";


export default class AdaptadorConcreto implements Adaptador {
    private servico: Servico
    constructor(servico: Servico) {
        this.servico = servico
    }
    adaptar(): InformacaoCliente {
        let dado = this.servico.informacao.dado
        let informacao = new InformacaoCliente()
        informacao.dado1 = dado[0]
        informacao.dado2 = dado[1]
        return informacao
    }
}