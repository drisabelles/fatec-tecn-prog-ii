"use strict";
exports.__esModule = true;
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.visitar = function (elemento) {
        var calculo = elemento;
        var subtracao = calculo.n1 - calculo.n2;
        console.log("Resultado da subtracao: ".concat(subtracao));
    };
    return Subtracao;
}());
exports["default"] = Subtracao;
