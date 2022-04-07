"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unica {
    constructor() {
        this.atributo = 'em branco';
    } //construtor sem parâmetros
    static obterInstancia() {
        return this.instanciaUnica;
    }
}
exports.default = Unica;
Unica.instanciaUnica = new Unica(); //classe e criação de um objeto formado na estrutura da própria classe
