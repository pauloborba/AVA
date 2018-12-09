import { Pessoa } from "./Pessoa"
import { Roteiro } from "./Roteiro";

export class Turma {
    private _id: string;
    private _instrutores: Pessoa[];
    private _alunos: Pessoa[];
    private _roteiros: Roteiro[];

    public constructor() {
        this._id = "";
        this._instrutores = [];
        this._alunos = [];
        this._roteiros = [];
    }

    get id(): string {
        return this._id; 
    }

    set id(value: string) {
        this._id = value;
    }

    get instrutores(): Pessoa[] {
        return this._instrutores;
    }

    set instrutores(value: Pessoa[]) {
        this._instrutores = value;
    }

    get alunos(): Pessoa[] {
        return this._alunos;
    }

    set alunos(value: Pessoa[]) {
        this._alunos = value;
    }

    get roteiros(): Roteiro[] {
        return this._roteiros;
    }

    set roteiros(value: Roteiro[]) {
        this._roteiros = value;
    }

    public copyFrom(from: Turma): void {
        this.id = from.id;
        this.instrutores = from.instrutores.slice();
        this.alunos = from.alunos.slice();
        this.roteiros = from.roteiros.slice();
    }

    public clone(): Turma {
        const t = new Turma;
        t.copyFrom(this);
        return t;
    }

    public toJSON() {
        return {
            id: this.id,
            instrutores: this.instrutores,
            alunos: this.alunos,
            roteiros: this.roteiros,
        };
    }

    public static fromJSON(json: any): Turma {
        return Object.assign(new Turma, {
            _id: json.id,
            _instrutores: json.instrutores,
            _alunos: json.alunos,
            _roteiros: json.roteiros,
        });
    }
}
