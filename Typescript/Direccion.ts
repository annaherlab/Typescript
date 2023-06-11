export class Direccion {
    _Calle: string;
    _Numero: number;
    _Piso: string;
    _Letra: string;
    _Codigopostal: number;
    _Población: string;
    _provincia: string;
    
    public constructor(Calle: string, Numero: number, Piso: string, Letra: string, Codigopostal: number, Población: string, provincia: string) {
        
      this._Calle = Calle;
      this._Numero = Numero;
      this._Piso = Piso;
      this._Letra = Letra;
      this._Codigopostal = Codigopostal;
      this._Población = Población;
      this._provincia = provincia;
    }
  
  get Calle(){
      return this._Calle;
}
  set Calle(a:string){
      this._Calle = a;
}
get Numero(){
  return this._Numero;
}
set Numero(a:number){
  this._Numero = a;
}
get Piso(){
  return this._Piso;
}
set Piso(a:string){
  this._Piso = a;
}
get Letra(){
  return this._Letra;
}
set Letra(a:string){
  this._Letra = a;
}
get Codigopostal(){
  return this._Codigopostal;
}
set Codigopostal(a:number){
  this._Codigopostal = a;
}
get Población(){
  return this._Población;
}
set Población(a:string){
  this._Población = a;
}
get provincia(){
  return this._provincia;
}
set provincia(a:string){
  this._provincia = a;
}
  }