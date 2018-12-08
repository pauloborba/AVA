import { Meta } from "./meta.model";

export class Avaliacao {
    private _conceito: string;
    private _meta: Meta;

    public constructor(conceito: string) {
        this.conceito = conceito;
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

    public toJSON() {
        return {
            conceito: this.conceito,
            meta: this.meta,
        };
    }
}
