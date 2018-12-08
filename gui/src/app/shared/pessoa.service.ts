import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Pessoa} from './pessoa.model';

@Injectable()
export class PessoaService {
  private baseUrl = "http://localhost:3000";
  private options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

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

  public addPessoa(p:Pessoa): Promise<Boolean>{
      return this.http.post(this.baseUrl + '/pessoa', JSON.stringify(p), this.options)
        .toPromise()
        .then(value => value.json().success ? true : false)
        .catch(reason => Promise.reject(reason));
    }
}
