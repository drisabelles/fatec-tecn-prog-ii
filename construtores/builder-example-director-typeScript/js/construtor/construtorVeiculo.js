"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("../modelo/veiculo"));
class ConstrutorVeiculo {
    constructor() {
        this.reset();
    }
    setFabricante(fabricante) {
        this.veiculo.fabricante = fabricante;
    }
    setTipo(tipo) {
        this.veiculo.tipo = tipo;
    }
    setEspecie(especie) {
        this.veiculo.especie = especie;
    }
    setCategoria(categoria) {
        this.veiculo.categoria = categoria;
    }
    setCarroceria(carroceria) {
        this.veiculo.carroceria = carroceria;
    }
    setCombustivel(combustivel) {
        this.veiculo.combustivel = combustivel;
    }
    setFreio(freio) {
        this.veiculo.freio = freio;
    }
    setNumeroPassageiros(numeroPassageiros) {
        this.veiculo.numeroPassageiros = numeroPassageiros;
    }
    setRefrigeracao(refrigeracao) {
        this.veiculo.refrigeracao = refrigeracao;
    }
    reset() {
        this.veiculo = new veiculo_1.default();
    }
    obterObjeto() {
        return this.veiculo;
    }
}
exports.default = ConstrutorVeiculo;
