import { Roteiro } from "../models/Roteiro"

export class RepositorioRoteiro {
    private _roteiros: Roteiro[];

    get roteiros(): Roteiro[] {
        return this._roteiros;
    }

    public getRoteiro(nome: string): Roteiro {
        // TODO implementar getRoteiro
        return null;
    }

    public addRoteiro(roteiro: Roteiro): boolean {
        // TODO implementar addRoteiro
        return false;
    }

    public rmvRoteiro(roteiro: Roteiro): boolean {
        // TODO implementar rmvRoteiro
        return false;
    }

}