import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Pessoa} from './pessoa.model';

@Injectable()
export class PessoaService {
  private baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  public getPessoa(CPF: String): Promise<Pessoa> {
    return this.http.get(this.baseUrl + '/pessoa/' + CPF)
      .toPromise()
      .then(
        value => value.json() 
      )
      .catch(
        reason => Promise.reject(reason)
      );
  }
}
