import { Component, OnInit, Input } from '@angular/core';
import { QuestaoRespondida } from '../shared/questaoresponida.model';
import { RoteiroService} from '../shared/service/roteiro.service';

@Component({
  selector: 'app-estatistica-questao',
  templateUrl: './estatistica-questao.component.html',
  styleUrls: ['./estatistica-questao.component.css']
})
export class EstatisticaQuestaoComponent implements OnInit {


  @Input()
  roteiroId:string;
  @Input()
  turmaId:string;

  private questoesRoteiro:QuestaoRespondida[];

  constructor(
    private roteiroService:RoteiroService,
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
    // Pegar as respostas de um roteiro pelo id dele e da turma, armazenar no array de questao respondida

    
  }

}
