import Objeto from "./prototype-class"
import Prototipo from "./prototype-interface"


export default class Objeto2 implements Prototipo {
    private atributo: String
    constructor(atributo: String) {
        this.atributo = atributo
    }
    public get obterAtributo(): String {
        return this.atributo
    }
    public set inserirAtributo(value: String) {
        this.atributo = value
    }
    copiar(): Prototipo {
        let obj = new Objeto(this.atributo)
        return obj
    }
}