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

  cpfatual: string;

  public redirect(cpf: String) {
    this.router.navigate(['/turmas'],{queryParams: {cpf: cpf}});
  }

  constructor(
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  cadastroNovaTurma(Id: string) {
    let turma = new Turma;
    turma.id = Id;

    this.pessoaService.getPessoa(this.cpfatual)
      .then(value => {
        turma.instrutores.push(value);
        turma.alunos.push(value);

        if (this.turmaService.addTurma(turma)) {
          console.log("turma criada com sucesso");
          this.redirect(this.cpfatual);
        }
        else {
          console.log("turma já existe");
        }
      });
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
        });
  }

}
