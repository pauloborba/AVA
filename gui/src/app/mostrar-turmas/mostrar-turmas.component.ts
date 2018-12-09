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

  public redirectAcessarTurma(turmaId:string){
    this.router.navigate(['/turma-home'],{queryParams: {id:turmaId, cpf:this.cpfatual}});
  }
  
  public redirectCriarTurma(){
    this.router.navigate(['/cadastro-turma'],{queryParams: {cpf: this.cpfatual}});
  }

  public redirectEntrarTurma(){
    this.router.navigate(['/cadastro-matricula'],{queryParams: {cpf: this.cpfatual}})
  }


  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
        });
    this.turmaService.getTurmasPessoa(this.cpfatual)
      .then(value => {
        value.forEach(element => {
          console.log(element);
        });
         this.turmas = value;
         
         console.log(value);  
      })
    }
}
