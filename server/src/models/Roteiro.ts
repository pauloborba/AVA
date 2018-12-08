import { Questao } from "./Questao";
import { RespostaRoteiro } from "./RespostaRoteiro";

export class Roteiro {
    private _nome: string;
    private _questoes: Questao[];
    // cpf aluno => respostas do roteiro
    private _respostasAlunos: Map<string, RespostaRoteiro>;

    public constructor() {
        this._nome = "";
        this._questoes = [];
        this._respostasAlunos = new Map<string, RespostaRoteiro>();
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
            nome: this.nome,
            questoes: this.questoes,
            respostasAlunos: this.respostasAlunos,
        };
    }
}