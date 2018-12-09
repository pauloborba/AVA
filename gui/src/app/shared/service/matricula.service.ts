import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Matricula } from '../matricula.model';
import { Avaliacao } from '../avaliacao.model';
import { RespostaRoteiro } from '../respostaroteiro.model';
import { QuestaoRespondida } from '../questaoresponida.model';

@Injectable()
export class MatriculaService {
  private static baseUrl = 'http://localhost:3000';
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) { }

  // Retorna todas as matriculas cadastradas
  public getMatriculas(): Promise<Matricula[]> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // getAvaliacoes
  public getAvaliacoes(cpf: string, turmaId: string): Promise<Avaliacao[]> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas/aluno/' + cpf + '/turma/' + turmaId + '/avaliacoes', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // getRespostasAluno
  public getRespostas(cpf: string, turmaId: string): Promise<Map<string, RespostaRoteiro>> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas/aluno/' + cpf + '/turma/' + turmaId + '/respostasaluno', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // getAvaliacao
  public getAvaliacao(cpf: string, turmaId: string, roteiroId: string): Promise<Avaliacao> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas/aluno/' + cpf + '/turma/' + turmaId + '/roteiro' + roteiroId + '/avaliacao', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // getQuestoesRespondidas
  public getQuestoesRespondidas(cpf: string, turmaId: string, roteiroId: string): Promise<Map<number, QuestaoRespondida>> {
    return this.http.get(MatriculaService.baseUrl + '/matriculas/aluno/' + cpf + '/turma/' + turmaId + '/roteiro' + roteiroId + '/questoesrespondidas', MatriculaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // Cadastra matricula
  public addMatricula(m: Matricula): Promise<Boolean> {
    return this.http.post(MatriculaService.baseUrl + '/matricula', JSON.stringify(m), MatriculaService.options)
    .toPromise()
    .then(value => value.json().success ? true : false);
  }
  
  // addQuestaoRespondida
  public addQuestaoRespondida(cpf: string, turmaId: string, roteiroId: string, noQuestao: number,  qr: QuestaoRespondida): Promise<Boolean> {
    return this.http.post(MatriculaService.baseUrl + '/matricula/aluno/' + cpf + '/turma/' + turmaId + '/roteiro/' + roteiroId + '/questao/' + noQuestao, JSON.stringify(qr), MatriculaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // deleteMatricula
  public deleteMatricula(cpf: string, turmaId: string): Promise<Boolean> {
    return this.http.delete(MatriculaService.baseUrl + '/matricula/aluno/' + cpf + '/turma/' + turmaId, MatriculaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

}
