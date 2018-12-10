import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Questao} from '../shared/questao.model'
import {RoteiroService} from '../shared/service/roteiro.service'
import { Status } from '../shared/status.model';
import { MatriculaService } from '../shared/service/matricula.service';
import { QuestaoRespondida } from '../shared/questaoresponida.model';

@Component({
  selector: 'app-roteiro-aluno',
  templateUrl: './roteiro-aluno.component.html',
  styleUrls: ['./roteiro-aluno.component.css']
})
export class RoteiroAlunoComponent implements OnInit {

  private roteiroId: string;
  private cpfAluno: string;
  private turmaId: string;
  private qtdQuestoes:number;
  private questaoAtual:number;

  constructor(
    private roteiroService : RoteiroService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router){
  }

  public changeQuestion(){
    this.questaoAtual = this.questaoAtual+1;
    /*
        Cenario 3 e 4 de Borba
        Cenario 1 e 2 de Guila
    */
  }

  publicentregarRoteiro(){
    /*
      Cenario 3 e 4 de Guila
    */
  }

  ngOnInit() {
    this.questaoAtual = 1;
    this.route
        .queryParams
        .subscribe(params => {
            this.roteiroId = params['id'];
            this.cpfAluno = params['cpf'];
            this.turmaId = params['turmaId'];
        });
  }
}
