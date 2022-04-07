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

export default class DiretorBarco implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorBarco = construtor as ConstrutorVeiculo
        constructorBarco.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorBarco.setCategoria(Categoria.Aluguel)
        constructorBarco.setEspecie(Especie.Carga)
        constructorBarco.setCarroceria(Carroceria.SemCabine)
        constructorBarco.setFreio(Freio.SemFreio)
        constructorBarco.setTipo(Tipo.Barco)
        constructorBarco.setNumeroPassageiros(20)
        constructorBarco.setCombustivel(Combustivel.Diesel)
        return constructorBarco.obterObjeto();
    }
}