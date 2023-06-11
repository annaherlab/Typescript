"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(Nombre, Apellidos, edad, DNI, Cumpleaños, colorFavorito, Sexo, Direcciones, Mails, Teléfonos, Notas) {
        this._Nombre = Nombre;
        this._Apellidos = Apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._Cumpleaños = Cumpleaños;
        this._colorFavorito = colorFavorito;
        this._Sexo = Sexo;
        this._Direcciones = Direcciones;
        this._Mails = Mails;
        this._Teléfonos = Teléfonos;
        this._Notas = Notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._Nombre;
        },
        set: function (a) {
            this._Nombre = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._Apellidos;
        },
        set: function (a) {
            this._Apellidos = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (a) {
            this._edad = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (a) {
            this._DNI = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Cumplea\u00F1os", {
        get: function () {
            return this._Cumpleaños;
        },
        set: function (a) {
            this._Cumpleaños = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (a) {
            this._colorFavorito = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Sexo", {
        get: function () {
            return this._Sexo;
        },
        set: function (a) {
            this._Sexo = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Direccion", {
        get: function () {
            return this._Direcciones;
        },
        set: function (a) {
            this._Direcciones = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Mails", {
        get: function () {
            return this._Mails;
        },
        set: function (a) {
            this._Mails = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Tel\u00E9fono", {
        get: function () {
            return this._Teléfonos;
        },
        set: function (a) {
            this._Teléfonos = a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Notas", {
        get: function () {
            return this._Notas;
        },
        set: function (a) {
            this._Notas = a;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
/*let date: Date = new Date("2019-01-16");
var Pedro = new Persona("Pedro", "De las palmeras", 15, "34578452S", date, "Rojo", "Masculino", , "PedroLasPalmas@gmail.com", 645873295, "notita");
console.log(Pedro);*/ 
