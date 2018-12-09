import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {TurmaService} from '../shared/service/turma.service';
import {Turma} from '../shared/turma.model'
import {Roteiro} from '../shared/roteiro.model'
import {RoteiroService} from '../shared/service/roteiro.service'

@Component({
  selector: 'app-turma-home',
  templateUrl: './turma-home.component.html',
  styleUrls: ['./turma-home.component.css']
})
export class TurmaHomeComponent implements OnInit {

  private cpfatual: string;
  private idatual: string;
  private roteiros: Roteiro[];
  private aluno: Boolean;
  private professor:Boolean;

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router){
  }

  isAluno() : Boolean{
    return this.aluno;
  }

  isInstrutor() : Boolean{
    return this.professor;
  }

  ngOnInit() {
    this.professor = false;
    this.aluno =false;
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpf'];
            this.idatual = params['id'];
        });
  
    
    
    this.turmaService.hasInstrutor(this.idatual, this.cpfatual).then(
      value => this.professor = value
    )
     
    this.turmaService.hasAluno(this.idatual, this.cpfatual).then(
      value => this.aluno = value
    )
  }
}
