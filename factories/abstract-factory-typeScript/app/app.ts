import FestaInfantil from "../fabricas/festaInfantil";
import FestaJunina from "../fabricas/festaJunina";

let fabrica = new FestaJunina()

let alimento = fabrica.criarAlimentacao()
let musica = fabrica.criarMusica()

console.log(`Cardápio: ${alimento.obterDescricao()}`);
console.log(`Informações da trilha sonora: 
nome: ${musica.obterNome()}
autor: ${musica.obterAutor()}
duração: ${musica.obterTempoDuracao()}`);
