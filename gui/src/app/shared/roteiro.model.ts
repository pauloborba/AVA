import { Questao } from "./questao.model";
import { RespostaRoteiro } from "./respostaroteiro.model";

export class Roteiro {
    private _id: string;
    private _nome: string;
    private _noQuestoes: number;
    private _questoes: Map<number, Questao>;
    // cpf aluno => respostas do roteiro
    private _respostasAlunos: Map<string, RespostaRoteiro>;

    public constructor() {
        this._id = "";
        this._nome = "";
        this._noQuestoes = 0;
        this._questoes = new Map<number, Questao>();
        this._respostasAlunos = new Map<string, RespostaRoteiro>();
    }
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get noQuestoes() {
        return this._noQuestoes;
    }

    set noQuestoes(value: number) {
        this._noQuestoes = value;
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
    
    private cloneMapQuestoes(from: Map<number, Questao>): Map<number, Questao> {
        const to: Map<number, Questao> = new Map<number, Questao>();
        for (const key in from) {
            to[key] = from[key];
        }
        return to;
    }
    
    private cloneMapRespostaRoteiro(from: Map<string, RespostaRoteiro>): Map<string, RespostaRoteiro> {
        const to: Map<string, RespostaRoteiro> = new Map<string, RespostaRoteiro>();
        for (const key in from) {
            to[key] = from[key];
        }
        return to;
    }

    public copyFrom(from: Roteiro) {
        this._id = from.id;
        this._nome = from.nome;
        this._noQuestoes = from.noQuestoes;
        this._questoes = this.cloneMapQuestoes(from.questoes);
        this._respostasAlunos = this.cloneMapRespostaRoteiro(from.respostasAlunos)
    }

    public clone(): Roteiro {
        const r = new Roteiro;
        r.copyFrom(this);
        return r;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            noQuestoes: this.noQuestoes,
            questoes: this.questoes,
            respostasAlunos: this.respostasAlunos,
        };
    }

    public static fromJSON(json: any): Roteiro {
        return Object.assign(new Roteiro, {
            _id: json.id,
            _nome: json.nome,
            _noQuestoes: json.noQuestoes,
            _questoes: json.questoes,
            _respostasAlunos: json.respostasAlunos,
        });
    }
    
}