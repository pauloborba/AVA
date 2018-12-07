export class Pessoa {
    private _cpf: string;
    private _nome: string;
    private _email: string;

    public constructor() {
        this._cpf = "";
        this._nome = "";
        this._email = "";
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

    // Creates a copy to preserve type safety
    public copyFrom(from: Pessoa): void {
        this.cpf = from.cpf;
        this.nome = from.nome;
        this.email = from.email;
    }

    public toJSON() {
        return {
            cpf: this.cpf,
            nome: this.nome,
            email: this.email,
        };
    }
}
