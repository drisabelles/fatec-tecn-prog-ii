"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objeto_1 = __importDefault(require("../modelo/objeto"));
class ConstrutorObjeto {
    constructor() {
        this.reset();
    }
    setAtributo1(atributo1) {
        this.objeto.atributo1 = atributo1;
    }
    setAtributo2(atributo2) {
        this.objeto.atributo2 = atributo2;
    }
    setAtributo3(atributo3) {
        this.objeto.atributo3 = atributo3;
    }
    reset() {
        this.objeto = new objeto_1.default();
    }
    obterObjeto() {
        return this.objeto;
    }
}
exports.default = ConstrutorObjeto;
