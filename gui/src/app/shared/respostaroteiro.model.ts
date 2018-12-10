import { QuestaoRespondida } from "./questaoresponida.model";

// Todas as respostas de um roteiro de um aluno
export class RespostaRoteiro {
    private _questoesRespondidas: Map<number, QuestaoRespondida>;

    public constructor() {
        this._questoesRespondidas = new Map<number, QuestaoRespondida>();
    }

    get questoesRespondidas(): Map<number, QuestaoRespondida> {
        return this._questoesRespondidas;
    }

    set questoesRespondidas(value: Map<number, QuestaoRespondida>) {
        this._questoesRespondidas = value;
    }

    public toJSON() {
        return {
            questoesRespondidas: this.questoesRespondidas,
        };
    }
}
