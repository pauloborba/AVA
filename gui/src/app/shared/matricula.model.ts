import { Pessoa } from "./pessoa.model";
import { Turma } from "./turma.model";
import { Avaliacao } from "./avaliacao.model";
import { RespostaRoteiro } from "./respostaroteiro.model";

export class Matricula {
    private _aluno: Pessoa;
    private _turma: Turma;
    // nome roteiro => Avaliacao
    private _avaliacoes: Map<string, Avaliacao>;
    // nome roteiro => RespostaRoteiro
    private _respostaAluno: Map<string, RespostaRoteiro>;

    public constructor() {
        this._aluno = new Pessoa;
        this._turma = new Turma;
        this._avaliacoes = new Map<string, Avaliacao>();
        this._respostaAluno = new Map<string, RespostaRoteiro>();
    }

    get aluno(): Pessoa {
        return this._aluno;
    }

    set aluno(value: Pessoa) {RespostaRoteiro
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

    get respostaAluno(): Map<string, RespostaRoteiro> {
        return this._respostaAluno;
    }

    set respostaAluno(value: Map<string, RespostaRoteiro>) {
        this._respostaAluno = value;
    }

    public toJSON() {
        return {
            aluno: this.aluno,
            turma: this.turma,
            avaliacoes: this.avaliacoes,
            respostaAluno: this.respostaAluno,
        };
    }
}