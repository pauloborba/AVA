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

  public redirect() {
    this.router.navigate(['/turmas'],{queryParams: {cpf: this.cpfatual}});
  }

  constructor(
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  cadastroNovaTurma(turmaId: string) {
    if (this.turmaService.addTurma(turmaId, this.cpfatual)) {
      console.log("Turma " + turmaId + " cadastrada com sucesso");
      this.redirect();
    }
    else {
      console.log("Turma " + turmaId + " já existe");
    }
  }
  
  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
        });
  }

}
