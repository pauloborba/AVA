import { Questao } from "./Questao";
import { RespostaRoteiro } from "./RespostaRoteiro";

export class Roteiro {
    private _id: string;
    private _nome: string;
    private _questoes: Map<number, Questao>;
    // cpf aluno => respostas do roteiro
    private _respostasAlunos: Map<string, RespostaRoteiro>;

    public constructor() {
        this._id = "";
        this._nome = "";
        this._questoes = new Map<number, Questao>();
        this._respostasAlunos = new Map<string, RespostaRoteiro>();
    }
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get questoes(): Map<number, Questao> {
        return this._questoes;
    }

    set questoes(value: Map<number, Questao>) {
        this._questoes = value;
    }

    get respostasAlunos(): Map<string, RespostaRoteiro> {
        return this._respostasAlunos;
    }

    set respostasAlunos(value: Map<string, RespostaRoteiro>) {
        this._respostasAlunos = value;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            questoes: this.questoes,
            respostasAlunos: this.respostasAlunos,
        };
    }
}