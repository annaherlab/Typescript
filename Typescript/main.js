"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tel_fono_1 = require("./Tel\u00E9fono");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
var personas = [];
function main() {
    var PedroCumpleaños = new Date("1990-01-16");
    var PedroDirecciones = [new Direccion_1.Direccion("C/ De los Aires", 14, "Segundo", "A", 78452, "Barcelona", "Martorell"), new Direccion_1.Direccion("C/ pedro almodovar", 2, "Segundo", "B", 77653, "Barcelona", "Martorell")];
    var PedroMails = [new Mail_1.Mail("gmail", "PedroLasPalmas@gmail.com"), new Mail_1.Mail("hotmail", "Pedrogatitos@hotmail.com")];
    var PedroTelefonos = [new Tel_fono_1.Teléfono("movil", 645873295), new Tel_fono_1.Teléfono("Empresa", 648951375)];
    var PedroNotas = ["Hola me presento, soy Pedro de las palmeras"];
    var Pedro = new Persona_1.Persona("Pedro", "De las palmeras", 33, "34578452S", PedroCumpleaños, "Rojo", "Masculino", PedroDirecciones, PedroMails, PedroTelefonos, PedroNotas);
    personas.push(Pedro);
    console.log(Pedro);
    var AnnaCumpleaños = new Date("2003-03-20");
    var AnnaDirecciones = [new Direccion_1.Direccion("C/ Francisco ", 4, "Primero", "C", 49654, "Barcelona", "Sant Feliu del Llobregat")];
    var AnnaMails = [new Mail_1.Mail("gmail", "Annahernandez@gmail.com")];
    var AnnaTelefonos = [new Tel_fono_1.Teléfono("movil", 687343332)];
    var AnnaNotas = ["Hola me presento, soy Anna "];
    var Anna = new Persona_1.Persona("Anna", "Hernández", 20, "90876543K", AnnaCumpleaños, "Morado", "Femenino", AnnaDirecciones, AnnaMails, AnnaTelefonos, AnnaNotas);
    personas.push(Anna);
    console.log(Anna);
    var JavierCumpleaños = new Date("2000-02-27");
    var JavierDirecciones = [new Direccion_1.Direccion("C/ De los Alpes", 2, "Tercero", "B", 85452, "Barcelona", "Hospitalet del Llobregat")];
    var JavierMails = [new Mail_1.Mail("gmail", "Javierminecraft@gmail.com")];
    var JavierTelefonos = [new Tel_fono_1.Teléfono("movil", 676538245)];
    var JavierNotas = ["Hola me presento, soy Javier y me gusta jugar a Minecraft"];
    var Javier = new Persona_1.Persona("Javier", "Lara", 23, "45678390E", JavierCumpleaños, "Azul", "Masculino", JavierDirecciones, JavierMails, JavierTelefonos, JavierNotas);
    personas.push(Javier);
    AñadirDatos("45678390E");
    console.log(Javier);
}
function AñadirDatos(DNI) {
    personas.forEach(function (persona) {
        if (persona.DNI.toLowerCase() == DNI.toLowerCase()) {
            persona.Mails.push(new Mail_1.Mail("gmail", "NuevoEmailAñadido@gmail.com"));
            persona.Teléfono.push(new Tel_fono_1.Teléfono("movil", 111111111));
            persona.Direccion.push(new Direccion_1.Direccion("C/ añadida", 0, "Primero", "A", 11111, "Barcelona", "Martorell"));
        }
    });
}
main();
