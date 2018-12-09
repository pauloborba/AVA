export class Questao {
    private _pergunta: string;
    private _respostaEsperada: string;

    public constructor() {
        this.pergunta = "";
        this.respostaEsperada = "";
    }

    get pergunta(): string {
        return this._pergunta;
    }

    set pergunta(value: string) {
        this._pergunta = value;
    }

    get respostaEsperada(): string {
        return this._respostaEsperada;
    }

    set respostaEsperada(value: string) {
        this._respostaEsperada = value;
    }

    public copyFrom(from: Questao) {
        this._pergunta = from.pergunta;
        this._respostaEsperada = from.respostaEsperada;
    }

    public clone(): Questao {
        const q = new Questao;
        q.copyFrom(this);
        return q;
    }

    public toJSON() {
        return {
            pergunta: this.pergunta,
            respostaEsperada: this.respostaEsperada,
        };
    }

    public static fromJSON(json: any): Questao {
        return Object.assign(new Questao, {
            _pergunta: json.pergunta,
            _pespostaEsperada: json.respostaEsperada,
        });
    }
}
