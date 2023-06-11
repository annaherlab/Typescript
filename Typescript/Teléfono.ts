export class Teléfono {
    _Tipo: string;
    _Numero: number;
  

    public constructor(Tipo: string, Numero: number) {
        
        this._Tipo = Tipo;
        this._Numero = Numero;
    }  

    
get Tipo(){
    return this._Tipo;
}
set Tipo(a:string){
    this._Tipo = a;
}
get Numero(){
  return this._Numero;
}
set Numero(a:number){
  this._Numero = a;
}
  }