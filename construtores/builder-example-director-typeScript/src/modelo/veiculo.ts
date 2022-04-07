import { Carroceria } from "./carroceria"
import { Categoria } from "./categoria"
import { Combustivel } from "./combustivel"
import { Especie } from "./especie"
import { Fabricante } from "./fabricante"
import { Freio } from "./freio"
import { Refrigeracao } from "./refrigeracao"
import { Tipo } from "./tipo"

export default class Veiculo {
    public fabricante!: Fabricante
    public tipo!: Tipo
    public especie!: Especie
    public categoria!: Categoria
    public carroceria!: Carroceria
    public combustivel!: Combustivel
    public freio!: Freio
    public numeroPassageiros!: number
    public refrigeracao!: Refrigeracao
}

