export default class Unica {
    private static instanciaUnica: Unica = new Unica() //classe e criação de um objeto formado na estrutura da própria classe
    public atributo = 'em branco'
    private constructor() {} //construtor sem parâmetros
    public static obterInstancia(): Unica { //static = modificador de acesso estático, método principal
        return this.instanciaUnica
    }
}