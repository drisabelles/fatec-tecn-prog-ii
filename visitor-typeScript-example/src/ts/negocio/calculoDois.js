"use strict";
exports.__esModule = true;
var CalculoDois = /** @class */ (function () {
    function CalculoDois(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Object.defineProperty(CalculoDois.prototype, "n1", {
        get: function () {
            return this.numero1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalculoDois.prototype, "n2", {
        get: function () {
            return this.numero2;
        },
        enumerable: false,
        configurable: true
    });
    CalculoDois.prototype.aceitar = function (visitante) {
        visitante.visitar(this);
    };
    return CalculoDois;
}());
exports["default"] = CalculoDois;
