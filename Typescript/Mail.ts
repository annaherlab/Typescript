export class Mail {
    _Tipo: string;
    _Direccion: string;
  

    public constructor(Tipo: string, Direccion: string) {
          
        this._Tipo = Tipo;
        this._Direccion = Direccion;
        
      }
    get Tipo(){
        return this._Tipo;
    }
    set Tipo(a:string){
        this._Tipo = a;
    }
    get Direccion(){
        return this._Direccion;
    }
    set Direccion(a:string){
        this._Direccion = a;
    }
  }