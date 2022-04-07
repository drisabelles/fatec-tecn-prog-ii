import ConstrutorVeiculo from "./construtor/construtorVeiculo";
import { Combustivel } from "./modelo/combustivel";
import { Especie } from "./modelo/especie";
import { Tipo } from "./modelo/tipo";

let construtor = new ConstrutorVeiculo()
construtor.setCombustivel(Combustivel.Bicombustivel)
construtor.setEspecie(Especie.Passageiro)
construtor.setTipo(Tipo.Automovel)
let veiculo = construtor.obterObjeto()

console.log(veiculo)