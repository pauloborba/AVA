import { Questao } from "./questao.model";
import { RespostaRoteiro } from "./respostaroteiro.model";

export class Roteiro {
    private _id: string;
    private _nome: string;
    private _questoes: Questao[];
    // cpf aluno => respostas do roteiro
    private _respostasAlunos: Map<string, RespostaRoteiro>;

    public constructor() {
        this._id = "";
        this._nome = "";
        this._questoes = [];
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

    get questoes(): Questao[] {
        return this._questoes;
    }

    set questoes(value: Questao[]) {
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