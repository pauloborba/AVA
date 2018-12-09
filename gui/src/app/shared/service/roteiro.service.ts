import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RoteiroService {
  private static baseUrl = "http://localhost:3000";
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) { }

  // getRoteiros
  // getRoteiro
  // getNoQuestoes
  // getQuestao

  // postRoteiro
  // postQuestao

  // putRoteiro
  
  // deleteRoteiro
  // deleteQuestao
}
