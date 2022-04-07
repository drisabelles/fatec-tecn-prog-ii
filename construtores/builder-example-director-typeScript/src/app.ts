import ConstrutorVeiculo from "./construtor/construtorVeiculo";
import DiretorBarco from "./diretor/diretorBarco";

let diretor = new DiretorBarco
let construtor = new ConstrutorVeiculo()
let automovel = diretor.construir(construtor)

console.log(automovel)