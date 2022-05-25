"use strict";
exports.__esModule = true;
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.visitar = function (elemento) {
        var calculo = elemento;
        var soma = calculo.n1 + calculo.n2;
        console.log("Resultado da soma: ".concat(soma));
    };
    return Soma;
}());
exports["default"] = Soma;
