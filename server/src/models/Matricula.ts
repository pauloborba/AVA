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

    public toJSON() {
        return {
            aluno: this.aluno,
            turma: this.turma,
            avaliacoes: this.avaliacoes,
            respostasAluno: this.respostasAluno,
        };
    }
}