import { Roteiro } from "../models/Roteiro"
import { Questao } from "../models/Questao";

export class RepositorioRoteiro {
    private _roteiros: Roteiro[];

    public constructor() {
        this._roteiros = [];
    }

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

    public getRoteirosDono(donoCpf: string): Roteiro[] {
        const r: Roteiro[] = [];
        this._roteiros.forEach(e => {
            if (e.donoCpf === donoCpf) {
                r.push(e);
            }
        });
        return r;
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
            var aux = 0;
            const qs = new Map<number, Questao>();

            for (var i = 1; i <= r.noQuestoes; i++) {
                if (i == index) aux++;
                else qs[i-aux] = r.questoes[i];
            }

            r.noQuestoes -= 1;
            r.questoes = qs;
            return true;
        }
        return false;
    }

    public cadastrar(roteiro: Roteiro): boolean {
        const clone = roteiro.clone();
        if (roteiro.id != '3')
            clone.id = "" + Math.random();
        this._roteiros.push(clone);
        return true;
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