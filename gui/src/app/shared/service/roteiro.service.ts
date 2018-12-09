import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Roteiro } from '../roteiro.model';

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
  
  // getQuestao

  // postRoteiro
  // postQuestao

  // putRoteiro

  // deleteRoteiro
  // deleteQuestao
}
