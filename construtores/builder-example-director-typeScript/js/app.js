"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const construtorVeiculo_1 = __importDefault(require("./construtor/construtorVeiculo"));
const combustivel_1 = require("./modelo/combustivel");
const especie_1 = require("./modelo/especie");
const tipo_1 = require("./modelo/tipo");
let construtor = new construtorVeiculo_1.default();
construtor.setCombustivel(combustivel_1.Combustivel.Bicombustivel);
construtor.setEspecie(especie_1.Especie.Passageiro);
construtor.setTipo(tipo_1.Tipo.Automovel);
let veiculo = construtor.obterObjeto();
console.log(veiculo);
