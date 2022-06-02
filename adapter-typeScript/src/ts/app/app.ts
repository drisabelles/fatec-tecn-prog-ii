import AdaptadorConcreto from "../adaptadores/adaptadorConcreto";
import Cliente from "../parte1/cliente";
import InformacaoServico from "../parte2/informacaoServico";
import Servico from "../parte2/servico";

let informacao = new InformacaoServico()
informacao.dado = ['informacao 1','informacao 2']

let servico = new Servico()
servico.informacao = informacao

let adaptador = new AdaptadorConcreto(servico)

let cliente = new Cliente()
cliente.metodo(adaptador.adaptar())