import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Matricula } from '../matricula.model';

@Injectable()
export class MatriculaService {
  private static baseUrl = 'http://localhost:3000';
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) { }

  // getMatriculas
  public getMatriculas(): Promise<Matricula[]> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // getAvaliacoes
  // getRespostasAluno
  // getAvaliacao
  // getQuestoesRespondidas

  // addQuestaoRespondida

  // Cadastra matricula
  public addMatricula(m: Matricula): Promise<Boolean> {
    return this.http.post(MatriculaService.baseUrl + '/matricula', JSON.stringify(m), MatriculaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
}

  // deleteMatricula

}
