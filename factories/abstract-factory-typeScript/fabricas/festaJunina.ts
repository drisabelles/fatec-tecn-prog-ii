import Alimentacao from "../interfaces/alimentacao";
import Musica from "../interfaces/musica";
import AlimentacaoCountry from "../modelos/alimentacaoCountry";
import MusicaJunina from "../modelos/musicaJunina";
import FabricaEvento from "./fabricaEvento";

export default class FestaJunina implements FabricaEvento{
    criarAlimentacao(): Alimentacao {
        let alimentacao = new AlimentacaoCountry('Bolinho Caipira', 'Gostoso, relíquia do RMVale!')
        return alimentacao
    }
    criarMusica(): Musica {
        let musica = new MusicaJunina('Quadrilha','Nelson da Capitinga','12h','1986')
        return musica
    }

}