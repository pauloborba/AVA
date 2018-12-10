import { Pessoa } from "../models/Pessoa";

export class RepositorioPessoa {
    private _pessoas: Pessoa[];
   
    public constructor() {
        this._pessoas = [];
    }

    get pessoas(): Pessoa[] {
        return this._pessoas;
    }

    public getPessoa(cpf: string): Pessoa {
        const p = this.findByCpf(cpf);
        if (p) {
            return p;
        }
        return null;
    }

    public cadastrar(pessoa: Pessoa): boolean {
        if (!this.findByCpf(pessoa.cpf)) {
            const clone = pessoa.clone();
            this._pessoas.push(clone);
            return true;
        }
        return false;
    }

    public atualizar(pessoa: Pessoa): boolean {
        const p = this.findByCpf(pessoa.cpf);
        if (p) {
            const clone = pessoa.clone();
            p.copyFrom(clone);
            return true;
        }
        return false;
    }

    public remover(cpf: string): boolean {
        if (this.findByCpf(cpf)) {
            var i: number = this._pessoas.findIndex(p => p.cpf === cpf);
            this._pessoas.splice(i, 1);
            return true;
        }
        return false;
    }

    private findByCpf(cpf: string): Pessoa | undefined {
        return this._pessoas.find(value => value.cpf === cpf);
    }
}
