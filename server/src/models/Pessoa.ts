export class Pessoa {
    private _cpf: string;
    private _nome: string;
    private _email: string;
    private _senha: string;

    public constructor() {
        this._cpf = "";
        this._nome = "";
        this._email = "";
        this._senha = "";
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(value: string) {
        this._cpf = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
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

    public copyFrom(from: Pessoa): void {
        this.cpf = from.cpf;
        this.nome = from.nome;
        this.email = from.email;
        this.senha = from.senha;
    }

    public clone(): Pessoa {
        const p = new Pessoa;
        p.copyFrom(this);
        return p;
    }

    public toJSON() {
        return {
            cpf: this.cpf,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
        };
    }
}
