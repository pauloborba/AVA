import { Roteiro } from "../models/Roteiro"
import { Questao } from "../models/Questao";

export class RepositorioRoteiro {
    private _roteiros: Roteiro[];

    get roteiros(): Roteiro[] {
        return this._roteiros;
    }

    public getRoteiro(roteiroId: string): Roteiro {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            return r;
        }
        return null;
    }

    public getNoQuestoes(roteiroId: string): number {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            return r.noQuestoes;
        }
        return null;
    }

    public getQuestoes(roteiroId: string):  Map<number, Questao> {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            return r.questoes;
        }
        return null;
    }

    public addQuestao(roteiroId: string, questao: Questao): boolean {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            const clone = questao.clone();
            r.noQuestoes += 1;
            r.questoes[r.noQuestoes] = clone;
            return true;
        }
        return false;
    }

    public removeQuestao(roteiroId: string, index: number): boolean {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            r.noQuestoes -= 1;
            const qs = new Map<number, Questao>();
            for (var i = 1; i < index; i++) {
                qs[i] = r.questoes[i];
            }
            for (var i = index; i < r.noQuestoes; i++) {
                qs[i] = qs[i+1];
            }
            r.questoes = qs;
            return true;
        }
        return false;
    }

    public cadastrar(roteiro: Roteiro): boolean {
        if (!this.findByRoteiroId(roteiro.id)) {
            const clone = roteiro.clone();
            this._roteiros.push(clone);
            return true;            
        }
        return false;
    }

    public atualizar(roteiro: Roteiro): boolean {
        const r = this.findByRoteiroId(roteiro.id);
        if (r) {
            const clone = roteiro.clone();
            r.copyFrom(clone);
            return true;
        }
        return false;
    }

    public remover(roteiroId: string): boolean {
        const r = this.findByRoteiroId(roteiroId);
        if (r) {
            var i: number = this._roteiros.findIndex(x => x.id === roteiroId);
            this._roteiros.splice(i, 1);
            return true;
        }
        return false;
    }

    private findByRoteiroId(id: string): Roteiro | undefined {
        return this._roteiros.find(value => value.id === id);
    }

}