import { Pessoa } from "./Pessoa";
import { Turma } from "./Turma";
import { Avaliacao } from "./Avaliacao";
import { RespostaRoteiro } from "./RespostaRoteiro";

export class Matricula {
    private _aluno: Pessoa;
    private _turma: Turma;
    // roteiroId => Avaliacao
    private _avaliacoes: Map<string, Avaliacao>;
    // roteiroId => RespostaRoteiro
    private _respostasAluno: Map<string, RespostaRoteiro>;

    public constructor() {
        this._aluno = new Pessoa;
        this._turma = new Turma;
        this._avaliacoes = new Map<string, Avaliacao>();
        this._respostasAluno = new Map<string, RespostaRoteiro>();
    }

    get aluno(): Pessoa {
        return this._aluno;
    }

    set aluno(value: Pessoa) {
        this._aluno = value;
    }

    get turma(): Turma {
        return this._turma;
    }

    set turma(value: Turma) {
        this._turma = value;
    }

    get avaliacoes():  Map<string, Avaliacao> {
        return this._avaliacoes;
    }

    set avaliacoes(value:  Map<string, Avaliacao>) {
        this._avaliacoes = value;
    }

    get respostasAluno(): Map<string, RespostaRoteiro> {
        return this._respostasAluno;
    }

    set respostasAluno(value: Map<string, RespostaRoteiro>) {
        this._respostasAluno = value;
    }

    private cloneMapAvaliacao(from: Map<string, Avaliacao>): Map<string, Avaliacao> {
        const to: Map<string, Avaliacao> = new Map<string, Avaliacao>();
        for (const key in from) {
            to[key] = from[key];
        }
        return to;
    }

    private cloneMapRespostasAluno(from: Map<string, RespostaRoteiro>): Map<string, RespostaRoteiro> {
        const to: Map<string, RespostaRoteiro> = new Map<string, RespostaRoteiro>();
        for (const key in from) {
            to[key] = from[key];
        }
        return to;
    }

    public copyFrom(from: Matricula): void {
        this._aluno = from.aluno;
        this._turma = from.turma;
        this.avaliacoes = this.cloneMapAvaliacao(from.avaliacoes);
        this._respostasAluno = this.cloneMapRespostasAluno(from.respostasAluno);
    }

    public clone(): Matricula {
        const m = new Matricula;
        m.copyFrom(this);
        return m;
    }

    public toJSON() {
        return {
            aluno: this.aluno,
            turma: this.turma,
            avaliacoes: this.avaliacoes,
            respostasAluno: this.respostasAluno,
        };
    }
}