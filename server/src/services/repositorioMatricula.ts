import { Matricula } from "../models/Matricula";
import { Avaliacao } from "../models/Avaliacao";
import { RespostaRoteiro } from "../models/RespostaRoteiro";
import { QuestaoRespondida } from "../models/QuestaoRespondida";

export class RepositorioMatricula {
    private matricula: Matricula[];

    public constructor() {
        this.matricula = [];
    }

    public cadastrar(matricula: Matricula): boolean {
        if (!this.findByAlunoTurma(matricula.aluno.cpf, matricula.turma.id)) {
            this.matricula.push(matricula);
            return true;
        }
        return false;
    }

    public remover(cpfAluno: string, turmaId: string): boolean {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            var i: number = this.matricula.findIndex(m => m.aluno.cpf === cpfAluno && m.turma.id === turmaId);
            this.matricula.splice(i, 1);
            return true;
        }
        return false;
    }

    public getAvaliacoes(cpfAluno: string, turmaId: string): Map<string, Avaliacao> {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            return m.avaliacoes;
        }
    }

    public getAvaliacao(cpfAluno: string, turmaId: string, roteiroId: string): Avaliacao {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            return m.avaliacoes[roteiroId];
        }
        return null;
    }

    public getRespostasAluno(cpfAluno: string, turmaId: string): Map<string, RespostaRoteiro> {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            return m.respostasAluno;
        }
        return null;
    }

    public getQuestoesRespondidas(cpfAluno: string, turmaId: string, roteiroId: string): Map<number, QuestaoRespondida> {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            const ra = m.respostasAluno[roteiroId];
            if (ra) {
                return ra.questoesRespondidas;
            }
        }
        return null;
    }

    public addQuestaoRespondida(cpfAluno: string, turmaId: string, roteiroId: string, noQuestao: number, questaoRespondida: QuestaoRespondida): boolean {
        const m = this.findByAlunoTurma(cpfAluno, turmaId);
        if (m) {
            const ra = m.respostasAluno[roteiroId];
            if (ra) {
                ra.questoesRespondidas[noQuestao] = questaoRespondida;
                return true;
            }
        }
        return false;
    }

    private findByAlunoTurma(cpfAluno: string, turmaId: string): Matricula | undefined {
        return this.matricula.find(value => value.aluno.cpf === cpfAluno && value.turma.id === turmaId);
    }
}