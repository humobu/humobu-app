export class Orientacao {

    private _codigo;
    private _descricao;
    private _selecionado;

     constructor(
         codigo: number = 0,
         descricao: string = null,
         selecionado: boolean = false,
     ){
         this._codigo = codigo;
         this._descricao = descricao;
         this._selecionado = selecionado;
     }

     get codigo(): string {
         return this._codigo;
     }

     set codigo(value: string) {
         this._codigo = value;
     }

     get descricao(): string {
        return this._descricao;
    }

    set descricao(value: string) {
        this._descricao = value;
    }
    get selecionado(): string {
        return this._selecionado;
    }

    set selecionado(value: string) {
        this._selecionado = value;
    }
}