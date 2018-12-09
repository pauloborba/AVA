import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/service/pessoa.service';
import { MatriculaService } from '../shared/service/matricula.service';
import { RoteiroService } from '../shared/service/roteiro.service';
import { TurmaService } from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import { Roteiro } from '../shared/roteiro.model';

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
    this.cadastrarRoteiro('1', 'Requisitos');
    this.getRoteirosDono('1');
  }
  
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

  getRoteirosDono(donoCpf: string) {
    console.log(this.roteiroService.getRoteirosDono(donoCpf));
  }

  cadastrarRoteiro(donoCpf: string, nome:string) {
    const roteiro = new Roteiro;
    roteiro.donoCpf = donoCpf;
    roteiro.nome = nome;
    if (this.roteiroService.addRoteiro(roteiro)) {
      console.log("Roteiro de " + nome  + " cadastrado");
    }
    else {
      console.log("Roteiro de " + nome + " nao pode ser cadastrado");
    }
  }

}
