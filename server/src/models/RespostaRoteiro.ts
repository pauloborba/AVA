import { QuestaoRespondida } from "./QuestaoRespondida";

// Todas as respostas de um roteiro de um aluno
export class RespostaRoteiro {
    private _questoesRespondidas: QuestaoRespondida[];

    // TODO add / rmv questaoRespondida

    public constructor() {
        this._questoesRespondidas = [];
    }

    get questoesRespondidas(): QuestaoRespondida[] {
        return this._questoesRespondidas;
    }

    set questoesRespondidas(value: QuestaoRespondida[]) {
        this._questoesRespondidas = value;
    }

    public toJSON() {
        return {
            questaoRespondidas: this.questoesRespondidas,
        };
    }
}
