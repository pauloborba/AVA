import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Pessoa } from '../pessoa.model';

@Injectable()
export class PessoaService {
  private static baseUrl = "http://localhost:3000";
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) { }

  // Retorna todas as pessoas cadastradas
  public getPessoas(): Promise<Pessoa> {
    return this.http.get(PessoaService.baseUrl + "/pessoas")
      .toPromise()
      .then(value => value.json());
  }

  // Retorna a pessoa de acordo com o cpf
  public getPessoa(cpf: String): Promise<Pessoa> {
    return this.http.get(PessoaService.baseUrl + '/pessoa/' + cpf)
      .toPromise()
      .then(value => value.json());
  }

  // Cadastra a Pessoa p no servidor, caso ela exista
  public addPessoa(p: Pessoa): Promise<Boolean>{
      return this.http.post(PessoaService.baseUrl + '/pessoa', JSON.stringify(p), PessoaService.options)
        .toPromise()
        .then(value => value.json().success ? true : false);
  }

  // Atualiza a Pessoa p no servidor, caso ela exista
  public updatePessoa(p: Pessoa): Promise<Boolean>{
    return this.http.put(PessoaService.baseUrl + '/pessoa', JSON.stringify(p), PessoaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // Deleta a Pessoa de acordo com o cpf, caso ela exista
  public deletePessoa(cpf: string): Promise<Boolean>{
    return this.http.delete(PessoaService.baseUrl + '/pessoa/' + cpf, PessoaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

}
