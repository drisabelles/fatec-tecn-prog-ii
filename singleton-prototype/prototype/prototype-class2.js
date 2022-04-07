"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prototype_class_1 = __importDefault(require("./prototype-class"));
class Objeto2 {
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
        let obj = new prototype_class_1.default(this.atributo);
        return obj;
    }
}
exports.default = Objeto2;
