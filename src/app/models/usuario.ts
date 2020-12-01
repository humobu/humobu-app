export class Usuario {

    private _email;
    private _senha;
    private _nome;
    private _sobrenome;

     constructor(
         email: string = null,
         senha: string = null,
         nome: string = null,
         sobrenome: string = null
     ){
         this._email = email;
         this._senha = senha;
         this._nome = nome;
         this._sobrenome = sobrenome;
     }

     get email(): string {
         return this._email;
     }

     set email(value: string) {
         this._email = value;
     }

     get senha(): string {
        return this._senha;
    }

    set senha(value: string) {
        this._senha = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    set sobrenome(value: string) {
        this._sobrenome = value;
    }

}