import { Roteiro } from "../models/Roteiro"
import { Questao } from "../models/Questao";

export class RepositorioRoteiro {
    private _roteiros: Roteiro[];

    // TODO add / rmv questoes
    // TODO set respostasAlunos

    get roteiros(): Roteiro[] {
        return this._roteiros;
    }

    public getRoteiro(nome: string): Roteiro {
        const r = this.findByRoteiroNome(nome);
        if (r) {
            return r;
        }
        return null;
    }

    public getQuestoes(nome: string): Questao[] {
        return null;
    }

    public addQuestao(nome: string, questao: Questao) {
        
    }

    public removeQuestao(nome: string, index: number) {
        
    }

    public cadastrar(): boolean {
        return false;
    }

    public atualizar(): boolean {
        return false;
    }

    public remover(): boolean {
        return false;
    }

    private findByRoteiroNome(nome: string): Roteiro | undefined {
        return this._roteiros.find(value => value.nome === nome);
    }

}