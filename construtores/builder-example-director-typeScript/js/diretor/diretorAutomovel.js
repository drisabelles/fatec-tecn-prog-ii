"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carroceria_1 = require("../modelo/carroceria");
const categoria_1 = require("../modelo/categoria");
const combustivel_1 = require("../modelo/combustivel");
const especie_1 = require("../modelo/especie");
const freio_1 = require("../modelo/freio");
const refrigeracao_1 = require("../modelo/refrigeracao");
const tipo_1 = require("../modelo/tipo");
class DiretorAutomovel {
    construir(construtor) {
        let constructorAutomovel = construtor;
        constructorAutomovel.setRefrigeracao(refrigeracao_1.Refrigeracao.SemRefrigeracao);
        constructorAutomovel.setCategoria(categoria_1.Categoria.Particular);
        constructorAutomovel.setEspecie(especie_1.Especie.Passageiro);
        constructorAutomovel.setCarroceria(carroceria_1.Carroceria.CabineSimples);
        constructorAutomovel.setFreio(freio_1.Freio.ABS);
        constructorAutomovel.setTipo(tipo_1.Tipo.Automovel);
        constructorAutomovel.setNumeroPassageiros(5);
        constructorAutomovel.setCombustivel(combustivel_1.Combustivel.Bicombustivel);
        return constructorAutomovel.obterObjeto();
    }
}
exports.default = DiretorAutomovel;
