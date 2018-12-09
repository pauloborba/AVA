import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Turma } from '../turma.model';


@Injectable()
export class TurmaService {
  private static baseUrl = "http://localhost:3000";
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) {}

  // Retorna todas as turmas cadastradas
  public getTurmas(): Promise<Turma[]>{
    return this.http.get(TurmaService.baseUrl + '/turmas')
      .toPromise()
      .then(value => value.json());
  }

  // Retorna uma Turma dado seu id
  public getTurma(id: String): Promise<Turma> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + id)
      .toPromise()
      .then(
        value => value.json() 
      )
      .catch(
        reason => Promise.reject(reason)
      );
  }

  // Retorna todas as Turmas que um Aluno está cadastrado dado um cpf
  public getTurmasAluno(cpf:string): Promise<Turma[]>{
    return this.http.get(TurmaService.baseUrl + '/aluno/' + cpf + '/turmas')
       .toPromise()
       .then(value => value.json())
      .catch(reason => Promise.reject(reason));
  }

  // getInstrutores
  // getAlunos
  // getRoteiros
  // hasInstrutor
  // hasAluno
  // hasRoteiro

  // Cadastra uma Turma
  public addTurma(t:Turma): Promise<Boolean>{
    return this.http.post(TurmaService.baseUrl + '/turma', t.toJSON(), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false)
      .catch(reason => Promise.reject(reason));
  }

  // postInstructor
  // postAluno
  // posrtRoteiro
  
  // putTurma

  // deleteTurma
  // deleteInstrutor
  // delete aluno
  // delete Roteiro
}
