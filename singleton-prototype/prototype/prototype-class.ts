import Prototipo from "./prototype-interface"

export default class Objeto {
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

    public copiar(): Prototipo {
        let obj = new Objeto(this.atributo)
        return obj
    }
}