import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Roteiro } from '../roteiro.model';
import { Questao } from '../questao.model';

@Injectable()
export class RoteiroService {
  private static baseUrl = 'http://localhost:3000';
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) { }

  // Retorna todos os roteiros cadastrados
  public getRoteiros(): Promise<Roteiro[]> {
    return this.http.get(RoteiroService.baseUrl + '/roteiros', RoteiroService.options)
      .toPromise()
      .then(value => value.json());
  }
  
  // Returns Roteiro if he exists with given roteiroId, null otherwise
  public getRoteiro(roteiroId: string): Promise<Roteiro> {
    return this.http.get(RoteiroService.baseUrl + '/roteiro/' + roteiroId, RoteiroService.options)
      .toPromise()
      .then(value => value.json());
  }

  // Return Number of questions of a Roteiro, -1 if there's no question
  public getNoQuestoes(roteiroId: string): Promise<number> {
    return this.http.get(RoteiroService.baseUrl + '/roteiro/' + roteiroId + '/noquestoes', RoteiroService.options)
      .toPromise()
      .then(value => value.json());
  }
  
  // Return all questions of a Roteiro, null if he does not exist
  public getQuestoes(roteiroId: string): Promise<Questao[]> {
    return this.http.get(RoteiroService.baseUrl + '/roteiro/' + roteiroId + '/questoes', RoteiroService.options)
      .toPromise()
      .then(value => value.json());
  }

  // Cadastra Roteiro, false if he already exists
  public addRoteiro(r: Roteiro): Promise<Boolean> {
    return this.http.post(RoteiroService.baseUrl + '/roteiro', JSON.stringify(r), RoteiroService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // Cadastra nova Questao, false if Roteiro does not exist
  public addQuestao(roteiroId: string, q: Questao): Promise<Boolean> {
    return this.http.post(RoteiroService.baseUrl + '/roteiro/' + roteiroId + '/questao', JSON.stringify(q), RoteiroService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // putRoteiro
  public updateRoteiro(r: Roteiro): Promise<Boolean> {
    return this.http.put(RoteiroService.baseUrl + '/roteiro', JSON.stringify(r), RoteiroService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // deleteRoteiro
  public deleteRoteiro(roteiroId: string): Promise<Boolean> {
    return this.http.delete(RoteiroService.baseUrl + '/roteiro/' + roteiroId, RoteiroService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }
  
  // deleteQuestao
  public deleteQuestao(roteiroId: string, index: string): Promise<Boolean> {
    return this.http.delete(RoteiroService.baseUrl + '/roteiro/' + roteiroId + '/index/' + index, RoteiroService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

}
