"use strict";
class Classe {
    constructor() { }
    static obterInstancia() {
        return this.instanciaUnica;
    }
}
Classe.instanciaUnica = new Classe();
