import { Turma } from "../models/Turma";
import { Pessoa } from "../models/Pessoa";
import { Roteiro } from "../models/Roteiro";

export class RepositorioTurma {
    private _turmas: Turma[];


    // TODO add / rmv roteiro

    public constructor() {
        this._turmas = [];
    }

    get turmas(): Turma[] {
        return this._turmas;
    }

    public getTurma(idTurma: string): Turma {
        const t = this.findById(idTurma);
        if (t) {
            return t;
        }
        return null;
    }

    public getIntrutores(idTurma: string): Pessoa[] {
        const t = this.findById(idTurma);
        if (t) {
            return t.instrutores;
        }
        return null;
    }

    public getInstrutor(idTurma: string, cpf: string): Pessoa {
        const is = this.getIntrutores(idTurma);
        if (is) {
            const i = this.findByCpf(is, cpf);
            if (i) {
                return i;
            }
        }
        return null;
    }

    public addInstrutor(idTurma: string, instrutor: Pessoa): boolean {
        const t = this.findById(idTurma);
        if (t) {
            if (!this.getInstrutor(idTurma, instrutor.cpf)) {
                t.instrutores.push(instrutor);
                return true;
            }
        }
        return false;
    }

    public removeInstrutor(idTurma: string, cpf: string): boolean {
        if (this.getInstrutor(idTurma, cpf)) {
            const t = this.findById(idTurma);
            var i: number = t.instrutores.findIndex(p => p.cpf === cpf);
            t.instrutores.splice(i, 1);
            return true;
        }
        return false;
    }

    public getAlunos(idTurma: string): Pessoa[] {
        const t = this.findById(idTurma);
        if (t) {
            return t.alunos;
        }
        return null;
    }

    public getAluno(idTurma: string, cpf: string): Pessoa {
        const as = this.getAlunos(idTurma);
        if (as) {
            const a = this.findByCpf(as, cpf);
            if (a) {
                return a;
            }
        }
        return null;
    }

    public addAluno(idTurma: string, aluno: Pessoa): boolean {
        const t = this.findById(idTurma);
        if (t) {
            if (!this.getAluno(idTurma, aluno.cpf)) {
                t.alunos.push(aluno);
                return true;
            }
        }
        return false;
    }

    public removeAluno(idTurma: string, cpf: string): boolean {
        if (this.getAluno(idTurma, cpf)) {
            const t = this.findById(idTurma);
            var i: number = t.alunos.findIndex(p => p.cpf === cpf);
            t.alunos.splice(i, 1);
            return true;
        }
        return false;
    }

    public getRoteiros(idTurma: string): Roteiro[] {
        const t = this.findById(idTurma);
        if (t) {
            return t.roteiros;
        }
        return null;
    }

    public getRoteiro(idTurma: string): Roteiro {
        return null;
    }

    public addRoteiro(): boolean {
        
        return false;
    }

    public removeRoteiro(): boolean {
        
        return false;
    }

    public cadastrar(turma: Turma): boolean {
        if(!this.findById(turma.id)) {
            this._turmas.push(turma);
            return true;
        }
        return false;
    }

    public atualizar(turma: Turma): boolean {
        const t = this.findById(turma.id);
        if (t) {
            t.copyFrom(turma);
            return true;
        }
        return false;
    }

    public remover(idTurma: string): boolean {
        const t = this.findById(idTurma);
        if (t) {
            var i: number = this._turmas.findIndex(x => x.id === idTurma);
            this._turmas.splice(i, 1);
            return true;
        }
        return false;
    }

    private findById(id: string): Turma | undefined {
        return this._turmas.find(value => value.id === id);
    }

    private findByCpf(arr: Pessoa[], cpf: string): Pessoa | undefined {
        return arr.find(value => value.cpf === cpf);
    }

    private findByRoteiroName(arr: Roteiro[], nome: string): Roteiro | undefined {
        return arr.find(value => value.nome === nome);
    }
}