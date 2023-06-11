import {Teléfono} from './Teléfono';
import {Direccion} from './Direccion';
import {Mail} from './Mail';

export class Persona {
  private _Nombre: string;
  private _Apellidos: string;
  private _edad: number;
  private _DNI: string;
  private _Cumpleaños: Date;
  private _colorFavorito: string;
  private _Sexo: string;
  private _Direcciones: Direccion[];
  private _Mails: Mail[];
  private _Teléfonos: Teléfono[];
  private _Notas: string[];


  public constructor(Nombre: string, Apellidos: string, edad: number, DNI: string, Cumpleaños: Date,
    colorFavorito: string, Sexo: string, Direcciones: Direccion[], Mails: Mail[], Teléfonos: Teléfono[], Notas: string[]) {
 
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
  
  get nombre(){
    return this._Nombre;
  }
  set nombre(a:string){
    this._Nombre = a;
}
  get apellidos(){
    return this._Apellidos;
}
  set apellidos(a:string){
    this._Apellidos = a;
}
  get edad(){
    return this._edad;
}
  set edad(a:number){
    this._edad = a;
}
  get DNI(){
    return this._DNI;
}
  set DNI(a:string){
    this._DNI = a;
}
  get Cumpleaños(){
    return this._Cumpleaños;
}
  set Cumpleaños(a:Date){
    this._Cumpleaños = a;
}
get colorFavorito(){
  return this._colorFavorito;
}
set colorFavorito(a:string){
  this._colorFavorito = a;
}
get Sexo(){
  return this._Sexo;
}
set Sexo(a:string){
  this._Sexo = a;
}
get Direccion(){
  return this._Direcciones;
}
set Direccion(a:Direccion[]){
  this._Direcciones = a;
}
get Mails(){
  return this._Mails;
}
set Mails(a:Mail[]){
  this._Mails = a;
}
get Teléfono(){
  return this._Teléfonos;
}
set Teléfono(a:Teléfono[]){
  this._Teléfonos = a;
}
get Notas(){
  return this._Notas;
}
set Notas(a:string[]){
  this._Notas = a;
}


}