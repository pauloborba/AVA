import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../shared/service/turma.service';
import { Turma } from '../shared/turma.model'
import { Pessoa } from '../shared/pessoa.model'
import { PessoaService } from '../shared/service/pessoa.service'
import { Matricula } from '../shared/matricula.model';
import {MatriculaService} from '../shared/service/matricula.service'
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-cadastro-matricula',
  templateUrl: './cadastro-matricula.component.html',
  styleUrls: ['./cadastro-matricula.component.css']
})
export class CadastroMatriculaComponent implements OnInit {

  cpfatual: string;
  matricula: Matricula;

  constructor(
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router) { }

    redirectMostraTurmas(){
      this.router.navigate(['/turmas'],{queryParams: {cpf: this.cpfatual}});
    }


  public entraTurma(turmaId: string){
      this.matriculaService.addMatricula(this.cpfatual, turmaId);
      this.turmaService.addAluno(turmaId, this.cpfatual);
      this.redirectMostraTurmas();
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
        });

    this.matricula = new Matricula;
  }
}
