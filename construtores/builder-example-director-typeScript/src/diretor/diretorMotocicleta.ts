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

export default class DiretorMotocicleta implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorMotocicleta = construtor as ConstrutorVeiculo
        constructorMotocicleta.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorMotocicleta.setCategoria(Categoria.Particular)
        constructorMotocicleta.setEspecie(Especie.Passageiro)
        constructorMotocicleta.setCarroceria(Carroceria.SemCabine)
        constructorMotocicleta.setFreio(Freio.ABS)
        constructorMotocicleta.setTipo(Tipo.Motocicleta)
        constructorMotocicleta.setNumeroPassageiros(2)
        constructorMotocicleta.setCombustivel(Combustivel.Bicombustivel)
        return constructorMotocicleta.obterObjeto();
    }
}