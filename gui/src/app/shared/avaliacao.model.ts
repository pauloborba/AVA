import { Meta } from "./meta.model";

export class Avaliacao {
    private _conceito: string;
    private _meta: Meta;

    public constructor() {
        this.conceito = "";
        this._meta = Meta.NULL;
    }

    get conceito(): string {
        return this._conceito;
    }

    set conceito(value: string) {
        this._conceito = value;
    }

    get meta(): Meta {
        return this._meta;
    }

    set meta(value: Meta) {
        this._meta = value;
    }

    public copyFrom(from: Avaliacao) {
        this.meta = from.meta;
        this.conceito = from.conceito;
    }

    public clone(): Avaliacao {
        const a = new Avaliacao;
        a.copyFrom(this);
        return a;
    }
    
    public toJSON() {
        return {
            conceito: this.conceito,
            meta: this.meta,
        };
    }
  
    public static fromJSON(json: any): Avaliacao {
        return Object.assign(new Avaliacao, {
            _conceito: json.conceito,
            _meta: json.meta,
        });
    }

}
