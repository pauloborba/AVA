import { Component, OnInit, Input } from '@angular/core';
import { QuestaoRespondida } from '../shared/questaoresponida.model';
import { RoteiroService} from '../shared/service/roteiro.service';
import {TurmaService} from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import { Questao } from '../shared/questao.model';

@Component({
  selector: 'app-estatistica-questao',
  templateUrl: './estatistica-questao.component.html',
  styleUrls: ['./estatistica-questao.component.css']
})
export class EstatisticaQuestaoComponent implements OnInit {


  @Input()
  id:string;

  private questoesRoteiro:QuestaoRespondida[];
  private questoesDesseRoteiro:Map<number, Questao>;
  private alunos:Pessoa[];
  private questoes:Questao[];

  constructor(
    private roteiroService:RoteiroService,
    private turmaService:TurmaService,
  ) { }

  pegarTempoMedio(){
    /*
      Cenário de Claudio 
    */
  }

  pegarNDesistencias(){
    /*
      Cenário de Claudio 
    */
  }

  ngOnInit() {
    this.questoes = new Array<Questao>();
    this.roteiroService.getQuestoes(this.id).then(value =>{
        this.questoesDesseRoteiro = value;

    for(var i =0;i<4;i++){
      this.questoes[i] = new Questao;
      this.questoes[i] = this.questoesDesseRoteiro[i];
    }
    })

    
    // Pegar as respostas de um roteiro pelo id dele e da turma, armazenar no array de questao respondida

    
  }

}
