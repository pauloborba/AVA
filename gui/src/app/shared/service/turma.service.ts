import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Turma } from '../turma.model';
import { Pessoa } from '../pessoa.model';


@Injectable()
export class TurmaService {
  private static baseUrl = 'http://localhost:3000';
  private static options = {
    headers: new Headers({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http: Http) {}

  // Retorna todas as turmas cadastradas
  public getTurmas(): Promise<Turma[]> {
    return this.http.get(TurmaService.baseUrl + '/turmas', TurmaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // Retorna uma Turma dado seu id
  public getTurma(id: String): Promise<Turma> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + id, TurmaService.options)
      .toPromise()
      .then(value => value.json());
  }

  // Retorna todas as Turmas que um Aluno está cadastrado dado um cpf
  public getTurmasAluno(cpf: string): Promise<Turma[]> {
    return this.http.get(TurmaService.baseUrl + '/aluno/' + cpf + '/turmas', TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

  // getInstrutores
  // getAlunos
  // getRoteiros

  // hasInstrutor
  public hasInstrutor(turmaId: string, cpf: string): Promise<Boolean> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/instrutor/' + cpf, TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }
  // hasAluno
  public hasAluno(turmaId: string, cpf: string): Promise<Boolean> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/aluno/' + cpf, TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }
  // hasRoteiro
  public hasRoteiro(turmaId: string, roteiroId: string): Promise<Boolean> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/roteiro/' + roteiroId, TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

  // Cadastra uma Turma
  public addTurma(t: Turma): Promise<Boolean> {
    return this.http.post(TurmaService.baseUrl + '/turma', t.toJSON(), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // Cadastra um Instrutor na Turma com id turmaId, retorna false se o instrutor já entiver cadastrado ou se a turma nao existir
  public addInstrutor(turmaId: string, i: Pessoa): Promise<Boolean> {
    return this.http.post(TurmaService.baseUrl + '/turma/' + turmaId + '/instrutor', JSON.stringify(i), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // Cadastra um Aluno na Turma com id turmaId, retorna false se o aluno já esta cadastrado ou se a turma nao existir
  public addAluno(turmaId: string, a: Pessoa): Promise<Boolean> {
    return this.http.post(TurmaService.baseUrl + '/turma/' + turmaId + '/aluno', JSON.stringify(a), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // posrtRoteiro
  
  // putTurma

  // deleteTurma
  // deleteInstrutor
  // delete aluno
  // delete Roteiro
}
