"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carroceria_1 = require("../modelo/carroceria");
const categoria_1 = require("../modelo/categoria");
const combustivel_1 = require("../modelo/combustivel");
const especie_1 = require("../modelo/especie");
const freio_1 = require("../modelo/freio");
const refrigeracao_1 = require("../modelo/refrigeracao");
const tipo_1 = require("../modelo/tipo");
class DiretorMotocicleta {
    construir(construtor) {
        let constructorMotocicleta = construtor;
        constructorMotocicleta.setRefrigeracao(refrigeracao_1.Refrigeracao.SemRefrigeracao);
        constructorMotocicleta.setCategoria(categoria_1.Categoria.Particular);
        constructorMotocicleta.setEspecie(especie_1.Especie.Passageiro);
        constructorMotocicleta.setCarroceria(carroceria_1.Carroceria.SemCabine);
        constructorMotocicleta.setFreio(freio_1.Freio.ABS);
        constructorMotocicleta.setTipo(tipo_1.Tipo.Motocicleta);
        constructorMotocicleta.setNumeroPassageiros(2);
        constructorMotocicleta.setCombustivel(combustivel_1.Combustivel.Bicombustivel);
        return constructorMotocicleta.obterObjeto();
    }
}
exports.default = DiretorMotocicleta;
