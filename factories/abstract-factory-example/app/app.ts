import Fabrica1 from "../fabricas/fabrica1";
import Fabrica2 from "../fabricas/fabrica2";
import Fabrica3 from "../fabricas/fabrica3";
import ObjetoA1 from "../modelos/objetoA1";


let fabrica = new Fabrica3()
let objetoA = fabrica.criarTipoA()
let objetoB = fabrica.criarTipoB()

console.log(objetoA.dadosTipoA())
console.log(objetoB.dadoTipoB())
