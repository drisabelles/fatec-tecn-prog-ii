"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carroceria_1 = require("../modelo/carroceria");
const categoria_1 = require("../modelo/categoria");
const combustivel_1 = require("../modelo/combustivel");
const especie_1 = require("../modelo/especie");
const freio_1 = require("../modelo/freio");
const refrigeracao_1 = require("../modelo/refrigeracao");
const tipo_1 = require("../modelo/tipo");
class DiretorBarco {
    construir(construtor) {
        let constructorBarco = construtor;
        constructorBarco.setRefrigeracao(refrigeracao_1.Refrigeracao.SemRefrigeracao);
        constructorBarco.setCategoria(categoria_1.Categoria.Aluguel);
        constructorBarco.setEspecie(especie_1.Especie.Carga);
        constructorBarco.setCarroceria(carroceria_1.Carroceria.SemCabine);
        constructorBarco.setFreio(freio_1.Freio.SemFreio);
        constructorBarco.setTipo(tipo_1.Tipo.Barco);
        constructorBarco.setNumeroPassageiros(20);
        constructorBarco.setCombustivel(combustivel_1.Combustivel.Diesel);
        return constructorBarco.obterObjeto();
    }
}
exports.default = DiretorBarco;
