import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../shared/service/turma.service';
import { Turma } from '../shared/turma.model'
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../shared/pessoa.model'
import { PessoaService } from '../shared/service/pessoa.service'

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.css']
})
export class CadastroTurmaComponent implements OnInit {

  cpfAtual: string;

  public redirect(CPF: String) {
    this.router.navigate(['']);
  }

  constructor(
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) {
    this.cpfAtual = "060"
  }

  cadastroNovaTurma(Id: string) {
    let turma = new Turma;
    turma.id = Id;

    this.pessoaService.getPessoa(this.cpfAtual)
      .then(value => {
        turma.instrutores.push(value);
        turma.alunos.push(value);

        if (this.turmaService.addTurma(turma)) {
          console.log("turma criada com sucesso");
        }
        else {
          console.log("turma já existe");
        }
      });
  }

  ngOnInit() {
  }

}
