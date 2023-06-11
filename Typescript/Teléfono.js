"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teléfono = void 0;
var Teléfono = /** @class */ (function () {
    function Teléfono(Tipo, Numero) {
        this._Tipo = Tipo;
        this._Numero = Numero;
    }
    Object.defineProperty(Teléfono.prototype, "Tipo", {
        get: function () {
            return this._Tipo;
        },
        set: function (a) {
            this._Tipo = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teléfono.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (a) {
            this._Numero = a;
        },
        enumerable: false,
        configurable: true
    });
    return Teléfono;
}());
exports.Teléfono = Teléfono;
