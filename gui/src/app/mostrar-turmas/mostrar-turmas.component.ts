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

  private CPFatual: string;
  private turmas: Turma[];

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router){
      this.CPFatual = "060"
     }


  ngOnInit() {
    this.turmaService.getTurmasAluno(this.CPFatual)
      .then(value => this.turmas = value)
      .catch(reason => alert(reason.json().failure || reason));
  }
}
