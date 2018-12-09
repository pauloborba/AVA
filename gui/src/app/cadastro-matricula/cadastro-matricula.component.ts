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

  cpfatual:String;
  matricula:Matricula;

  constructor(
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router) { }

    redirectMostraTurmas(){
      this.router.navigate(['/turmas'],{queryParams: {cpf: this.cpfatual}});
    }


  public entraTurma(id:string){
    
    Promise.all([
      this.pessoaService.getPessoa(this.cpfatual)
        .then(value => {
            this.matricula.aluno = value;
        }),
      this.turmaService.getTurma(id)
          .then(value => {
            this.matricula.turma = value;
        }),
    ]).then(() => {
      this.matriculaService.addMatricula(this.matricula);
      this.turmaService.addAluno(this.matricula.turma.id, this.matricula.aluno);
      this.redirectMostraTurmas();
    })
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
