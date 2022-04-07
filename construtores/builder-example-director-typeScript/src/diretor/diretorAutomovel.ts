import Construtor from "../construtor/construtor";
import ConstrutorVeiculo from "../construtor/construtorVeiculo";
import { Carroceria } from "../modelo/carroceria";
import { Categoria } from "../modelo/categoria";
import { Combustivel } from "../modelo/combustivel";
import { Especie } from "../modelo/especie";
import { Freio } from "../modelo/freio";
import { Refrigeracao } from "../modelo/refrigeracao";
import { Tipo } from "../modelo/tipo";
import Veiculo from "../modelo/veiculo";
import Diretor from "./diretor";

export default class DiretorAutomovel implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorAutomovel = construtor as ConstrutorVeiculo
        constructorAutomovel.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorAutomovel.setCategoria(Categoria.Particular)
        constructorAutomovel.setEspecie(Especie.Passageiro)
        constructorAutomovel.setCarroceria(Carroceria.CabineSimples)
        constructorAutomovel.setFreio(Freio.ABS)
        constructorAutomovel.setTipo(Tipo.Automovel)
        constructorAutomovel.setNumeroPassageiros(5)
        constructorAutomovel.setCombustivel(Combustivel.Bicombustivel)
        return constructorAutomovel.obterObjeto();
    }
}