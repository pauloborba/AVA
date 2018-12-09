import { Status } from "./Status";

export class QuestaoRespondida {
    private _pergunta: string;
    private _resposta: string;
    private _status: Status;
    private _tempo: number;

    public constructor() {
        this._pergunta = "";
        this._resposta = "";
        this._status = Status.Pendente;
        this._tempo = -1;
    }

    get pergunta(): string {
        return this._pergunta;
    }

    set pergunta(value: string) {
        this._pergunta = value;
    }

    get resposta(): string {
        return this._resposta;
    }

    set resposta(value: string) {
        this._resposta = value;
    }

    get status(): Status {
        return this._status;
    }

    set status(value: Status) {
        this._status = value;
    }

    get tempo(): number {
        return this._tempo;
    }

    set tempo(value: number) {
        this._tempo = value;
    }

    public copyFrom(from: QuestaoRespondida) {
        this._pergunta = from.pergunta;
        this._resposta = from.resposta;
        this._status = from.status;
        this._tempo = from.tempo;
    }

    public clone(): QuestaoRespondida {
        const qr = new QuestaoRespondida;
        qr.copyFrom(this);
        return qr;
    }

    public toJSON() {
        return {
            pergunta: this.pergunta,
            resposta: this.resposta,
            status: this.status,
            tempo: this.tempo,
        };
    }

}
