"use strict";
exports.__esModule = true;
var entrada_1 = require("../io/entrada");
var calculoDois_1 = require("../negocio/calculoDois");
var soma_1 = require("../negocio/soma");
var subtracao_1 = require("../negocio/subtracao");
console.log("Bem-vindo(a) a melhor calculadora/processadora do mundo");
var execucao = true;
var opcoesDoisNumeros = [1, 2, 3, 4];
while (execucao) {
    console.log("------------------------------");
    console.log("Op\u00E7\u00F5es para dois n\u00FAmeros: ");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("------------------------------");
    console.log("Op\u00E7\u00F5es para tr\u00EAs n\u00FAmeros: ");
    console.log("5 - Mostrar o menor");
    console.log("6 - Mostrar o maior");
    console.log("7 - Todos em ordem crescente");
    console.log("8 - Todos em ordem decrescente");
    console.log("------------------------------");
    console.log("0 - Sair");
    console.log("------------------------------");
    var entrada = new entrada_1["default"]();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    if (opcoesDoisNumeros.includes(opcao)) {
        var numero1 = entrada.receberNumero("Por favor, digite o primeiro numero ");
        var numero2 = entrada.receberNumero("Por favor, digite o segundo numero ");
        var calculo = new calculoDois_1["default"](numero1, numero2);
        switch (opcao) {
            case 1:
                calculo.aceitar(new soma_1["default"]());
                break;
            case 2:
                calculo.aceitar(new subtracao_1["default"]);
                break;
        }
    }
    else if (opcao == 0) {
        execucao = false;
        console.log("At\u00E9 mais!");
    }
    else {
        console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
