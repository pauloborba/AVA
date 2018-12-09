import { Component, OnInit } from '@angular/core';
import {TurmaService} from '../shared/service/turma.service';
import {Turma} from '../shared/turma.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-turmas',
  templateUrl: './mostrar-turmas.component.html',
  styleUrls: ['./mostrar-turmas.component.css']
})
export class MostrarTurmasComponent implements OnInit {

  private cpfatual: string;
  private turmas: Turma[];

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router){
    }

  public redirect(){
    this.router.navigate(['/cadastro-turma'],{queryParams: {cpf: this.cpfatual}});
  }


  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
        });

    this.turmaService.getTurmasAluno(this.cpfatual)
      .then(value => this.turmas = value);
  }
}
