import { OperacaoA } from "../sistemaA/operacaoA";
import TransacaoA from "../sistemaA/transacaoA";
import transacaoA from "../sistemaA/transacaoA";
import { OperacaoC } from "../sistemaC/operacaoC";
import TransacaoC from "../sistemaC/transacaoC";
import Adaptador from "./adaptador";

export default class AdaptadorC implements Adaptador {
    private transacaoC: TransacaoC
    constructor(transacaoC: TransacaoC) {
        this.transacaoC = transacaoC
    }
    adaptar(): transacaoA {
        let dados = this.transacaoC.obterDados
        let data = dados[0]
        let valor = dados
        let operacao = dados[1]
        if (operacao === OperacaoC.Adicao) {
            let transacao = new TransacaoA(valor, data, OperacaoA.Credito)
            return transacao
        } else {
            let transacao = new TransacaoA(valor, data, OperacaoA.Debito)
            return transacao
        }

    }
}