"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(Calle, Numero, Piso, Letra, Codigopostal, Población, provincia) {
        this._Calle = Calle;
        this._Numero = Numero;
        this._Piso = Piso;
        this._Letra = Letra;
        this._Codigopostal = Codigopostal;
        this._Población = Población;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "Calle", {
        get: function () {
            return this._Calle;
        },
        set: function (a) {
            this._Calle = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (a) {
            this._Numero = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Piso", {
        get: function () {
            return this._Piso;
        },
        set: function (a) {
            this._Piso = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Letra", {
        get: function () {
            return this._Letra;
        },
        set: function (a) {
            this._Letra = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Codigopostal", {
        get: function () {
            return this._Codigopostal;
        },
        set: function (a) {
            this._Codigopostal = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "Poblaci\u00F3n", {
        get: function () {
            return this._Población;
        },
        set: function (a) {
            this._Población = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (a) {
            this._provincia = a;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
