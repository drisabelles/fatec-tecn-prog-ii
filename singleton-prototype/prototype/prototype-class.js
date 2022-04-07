"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Objeto {
    constructor(atributo) {
        this.atributo = atributo;
    }
    get obterAtributo() {
        return this.atributo;
    }
    set inserirAtributo(value) {
        this.atributo = value;
    }
    copiar() {
        let obj = new Objeto(this.atributo);
        return obj;
    }
}
exports.default = Objeto;
