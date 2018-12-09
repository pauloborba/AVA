import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Turma } from '../turma.model';
import { Pessoa } from '../pessoa.model';
import { Roteiro } from '../roteiro.model';


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
  public getTurmasPessoa(cpf: string): Promise<Turma[]> {
    return this.http.get(TurmaService.baseUrl + '/pessoa/' + cpf + '/turmas', TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

  // getInstrutores
  public getInstrutores(turmaId: string): Promise<Pessoa[]> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/instrutores', TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

  // getAlunos
  public getAlunos(turmaId: string): Promise<Pessoa[]> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/alunos', TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

  // getRoteiros
  public getRoteiros(turmaId: string): Promise<Roteiro[]> {
    return this.http.get(TurmaService.baseUrl + '/turma/' + turmaId + '/roteiros', TurmaService.options)
       .toPromise()
       .then(value => value.json());
  }

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

  // postRoteiro
  public addRoteiro(r: Roteiro): Promise<Boolean> {
    return this.http.post(TurmaService.baseUrl + '/roteiro', JSON.stringify(r), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }
  
  // putTurma
  public updatePessoa(t: Turma): Promise<Boolean> {
    return this.http.put(TurmaService.baseUrl + '/turma', JSON.stringify(t), TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // deleteTurma
  public deletePessoa(turmaId: string): Promise<Boolean> {
    return this.http.delete(TurmaService.baseUrl + '/turma/' + turmaId, TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // deleteInstrutor
  public deleteInstrutor(turmaId: string, cpf: string): Promise<Boolean> {
    return this.http.delete(TurmaService.baseUrl + '/turma/' + turmaId + '/instrutor/' + cpf, TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // delete aluno
  public deleteAluno(turmaId: string, cpf: string): Promise<Boolean> {
    return this.http.delete(TurmaService.baseUrl + '/turma/' + turmaId + '/aluno/' + cpf, TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }

  // delete Roteiro
  public deleteRoteiro(turmaId: string, roteiroId: string): Promise<Boolean> {
    return this.http.delete(TurmaService.baseUrl + '/turma/' + turmaId + '/roteiro/' + roteiroId, TurmaService.options)
      .toPromise()
      .then(value => value.json().success ? true : false);
  }
}
