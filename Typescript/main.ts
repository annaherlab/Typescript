import {Teléfono} from './Teléfono';
import {Direccion} from './Direccion';
import {Mail} from './Mail';
import {Persona} from './Persona';

var personas:Persona[] = [];

function main()
    {
        let PedroCumpleaños: Date = new Date("1990-01-16");  
        var PedroDirecciones = [new Direccion("C/ De los Aires", 14, "Segundo", "A", 78452, "Barcelona", "Martorell"), new Direccion("C/ pedro almodovar", 2, "Segundo", "B", 77653, "Barcelona", "Martorell")];
        var PedroMails = [new Mail("gmail", "PedroLasPalmas@gmail.com"), new Mail("hotmail", "Pedrogatitos@hotmail.com")];
        var PedroTelefonos = [new Teléfono("movil", 645873295), new Teléfono("Empresa", 648951375)];
        var PedroNotas = ["Hola me presento, soy Pedro de las palmeras"];
        var Pedro = new Persona("Pedro", "De las palmeras", 33, "34578452S", PedroCumpleaños, "Rojo", "Masculino", PedroDirecciones, PedroMails, PedroTelefonos, PedroNotas);
        personas.push(Pedro);

        console.log(Pedro);

        let AnnaCumpleaños: Date = new Date("2003-03-20");  
        var AnnaDirecciones = [new Direccion("C/ Francisco ", 4, "Primero", "C", 49654, "Barcelona", "Sant Feliu del Llobregat")];
        var AnnaMails = [new Mail("gmail", "Annahernandez@gmail.com")];
        var AnnaTelefonos = [new Teléfono("movil", 687343332)];
        var AnnaNotas = ["Hola me presento, soy Anna "];
        var Anna = new Persona("Anna", "Hernández", 20, "90876543K", AnnaCumpleaños, "Morado", "Femenino", AnnaDirecciones, AnnaMails, AnnaTelefonos, AnnaNotas);
        personas.push(Anna);

        console.log(Anna);

        let JavierCumpleaños: Date = new Date("2000-02-27");  
        var JavierDirecciones = [new Direccion("C/ De los Alpes", 2, "Tercero", "B", 85452, "Barcelona", "Hospitalet del Llobregat")];
        var JavierMails = [new Mail("gmail", "Javierminecraft@gmail.com")];
        var JavierTelefonos = [new Teléfono("movil", 676538245)];
        var JavierNotas = ["Hola me presento, soy Javier y me gusta jugar a Minecraft"];
        var Javier = new Persona("Javier", "Lara", 23, "45678390E", JavierCumpleaños, "Azul", "Masculino", JavierDirecciones, JavierMails, JavierTelefonos, JavierNotas);
        personas.push(Javier);

        AñadirDatos("45678390E");

        console.log(Javier);

    
    }

function AñadirDatos(DNI:string){
    personas.forEach(persona =>{
        if(persona.DNI.toLowerCase() == DNI.toLowerCase()){
            persona.Mails.push(new Mail("gmail", "NuevoEmailAñadido@gmail.com"));
            persona.Teléfono.push(new Teléfono("movil", 111111111));
            persona.Direccion.push(new Direccion("C/ añadida", 0, "Primero", "A", 11111, "Barcelona", "Martorell"));
        }
    });
}    

    main();