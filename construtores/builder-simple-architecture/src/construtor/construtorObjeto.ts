import Objeto from "../modelo/objeto";
import Construtor from "./construtor";

export default class ConstrutorObjeto implements Construtor {
    private objeto!: Objeto
    constructor(){
        this.reset()
    }
    public setAtributo1(atributo1: any) {
        this.objeto.atributo1 = atributo1
    }
    public setAtributo2(atributo2: any) {
        this.objeto.atributo2 = atributo2
    }
    public setAtributo3(atributo3: any) {
        this.objeto.atributo3 = atributo3
    }
    reset(): void {
        this.objeto = new Objeto()
    }
    obterObjeto() {
        return this.objeto
    }
}

