import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/service/pessoa.service';
import { MatriculaService } from '../shared/service/matricula.service';
import { RoteiroService } from '../shared/service/roteiro.service';
import { TurmaService } from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import { Roteiro } from '../shared/roteiro.model';
import { Turma } from '../shared/turma.model';
import { Questao } from '../shared/questao.model';

@Component({
  selector: 'app-dummy-db',
  templateUrl: './dummy-db.component.html',
  styleUrls: ['./dummy-db.component.css']
})
export class DummyDbComponent implements OnInit {

  constructor(
    private matriculaService: MatriculaService,
    private pessoaService: PessoaService,
    private roteiroService: RoteiroService,
    private turmaService: TurmaService,
    ) { }

  ngOnInit() {
    this.cadastrarPessoa('1', 'Mario', 'mvgmb@cin.ufpe.br', '1');
    this.cadastrarPessoa('2', 'Gui', 'ggfl@cin.ufpe.br', '2');
    this.cadastrarPessoa('3', 'Pedro', 'phts@cin.ufpe.br', '3');
    this.cadastrarPessoa('4', 'Marcela', 'marcelinha@cin.ufpe.br', '4');
    this.cadastrarPessoa('5', 'Kusko', 'king@cin.ufpe.br', '5');

    this.cadastrarRoteiro('1', 'Requisitos', '');
    this.cadastrarRoteiro('1', 'Gerencia de Requisitos', '');
    this.cadastrarRoteiro('1', 'Projeto e Implementação', '3');
    this.cadastrarRoteiro('1', 'Testes Testes Testes Testes', '');
   
    this.addQuestao('3', 'Como que faz para ganhar muito dinheiro?', 'Tomando muito K');
    this.addQuestao('3', 'Questao 2', 'Resposta esperada 2');
    this.addQuestao('3', 'Questao 3', 'Resposta esperada 3');
    this.addQuestao('3', 'Questao 4', 'Resposta esperada 4');
   
    this.cadastrarTurma('aaa', '1');
    this.turmaService.addInstrutor('aaa', '2');
    this.turmaService.addAluno('aaa', '3');
   


  }
  // ***************
  // *  MATRICULA  * 
  // ***************

  
  // ****************
  // *    PESSOA    * 
  // ****************
  cadastrarPessoa(cpf:string, nome:string, email:string, senha:string){
    const pessoa = new Pessoa;
    pessoa.cpf = cpf;
    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.senha = senha;

    if (this.pessoaService.addPessoa(pessoa)) {
      console.log(nome + " cadastrado");
    }
    else {
      console.log(nome + " nao pode ser cadastrado");
    }
  }

  // ***************
  // *   ROTEIRO   * 
  // ***************

  cadastrarRoteiro(donoCpf: string, nome: string, id: string) {
    const roteiro = new Roteiro;
    roteiro.donoCpf = donoCpf;
    roteiro.nome = nome;
    roteiro.id = id;
    if (this.roteiroService.addRoteiro(roteiro)) {
      console.log("Roteiro de " + nome  + " cadastrado");
    }
    else {
      console.log("Roteiro de " + nome + " nao pode ser cadastrado");
    }
  }

  updateRoteiro() {
    this.roteiroService.getRoteiro('3')
      .then(v => {
        v.nome = 'cu';
        this.roteiroService.updateRoteiro(v);
      });
  }

  addQuestao(roteiroId: string, pergunta: string, respostaEsperada: string) {
    const q = new Questao;
    q.pergunta = pergunta;
    q.respostaEsperada = respostaEsperada;
    this.roteiroService.addQuestao(roteiroId, q);
  }

  getRoteirosDono(donoCpf: string) {
    console.log(this.roteiroService.getRoteirosDono(donoCpf));
  }

  // ***************
  // *    TURMA    * 
  // ***************

  cadastrarTurma(turmaId: string, creatorCpf: string) {
    if (this.turmaService.addTurma(turmaId, creatorCpf)) {
      console.log("Turma " + turmaId + " cadastrada com sucesso");
    }
    else {
      console.log("Turma " + turmaId + " já existe");
    }
  }
}
