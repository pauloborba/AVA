import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Questao} from '../shared/questao.model'
import {RoteiroService} from '../shared/service/roteiro.service'

@Component({
  selector: 'app-roteiro-aluno',
  templateUrl: './roteiro-aluno.component.html',
  styleUrls: ['./roteiro-aluno.component.css']
})
export class RoteiroAlunoComponent implements OnInit {

  private roteiroId:string;
  private questoes:Questao[];
  private perguntas: string[] = [];

  constructor(
    private roteiroService : RoteiroService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.roteiroId = params['id'];
        });
    this.roteiroService.getQuestoes(this.roteiroId).then(value => {
      for (let e of Object.keys(value)) {
        this.perguntas.push(value[e].pergunta);
      }
      console.log(this.questoes)
    }
    )
  }



}
