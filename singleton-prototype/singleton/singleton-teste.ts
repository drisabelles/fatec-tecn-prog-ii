class Classe {
    private static instanciaUnica: Classe = new Classe();
    private constructor() {}
    public static obterInstancia(): Classe {
        return this.instanciaUnica;
    }
}