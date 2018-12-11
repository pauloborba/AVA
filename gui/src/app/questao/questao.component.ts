import { Component, OnInit, Input } from '@angular/core';
import {Status} from '../shared/status.model';
import {RoteiroService} from '../shared/service/roteiro.service';
import {Roteiro} from '../shared/roteiro.model'
import { MatriculaService } from '../shared/service/matricula.service';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  //Funcao de timer

  @Input()
  private nQuestao:number;

  @Input()
  private idRoteiro:string;

  private status:Status;
  private nQuestoes:string;
  private enunciado:string;

  private questaoAtual:number;

  private submitResposta(resposta:string){
    //Post para resposta
    /*
      CENARIO DE BORBA 1 e 2
    */

    //this.matriculaService.addQuestaoRespondida()
  }



  constructor(
    private roteiroService:RoteiroService,
    private matriculaService:MatriculaService
  ) {}

  ngOnInit() {
    //get questao dando roteiroId e numero da questao
    
    this.roteiroService.getQuestoes(this.idRoteiro).then(value => {this.questaoAtual = this.nQuestao
    })
  }

}
