"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(Tipo, Direccion) {
        this._Tipo = Tipo;
        this._Direccion = Direccion;
    }
    Object.defineProperty(Mail.prototype, "Tipo", {
        get: function () {
            return this._Tipo;
        },
        set: function (a) {
            this._Tipo = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "Direccion", {
        get: function () {
            return this._Direccion;
        },
        set: function (a) {
            this._Direccion = a;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
