import { Component, OnInit, Input } from '@angular/core';
import { RoteiroService } from '../shared/service/roteiro.service'

@Component({
  selector: 'app-enviar-resposta',
  templateUrl: './enviar-resposta.component.html',
  styleUrls: ['./enviar-resposta.component.css']
})
export class EnviarRespostaComponent implements OnInit {

  @Input()
  private roteiroId:string;

  @Input()
  private questao:string;

  constructor() { }

  enviarDuvida(){
    //codigo para enviar duvida para o monitor

  }

  ngOnInit() {
    console.log(this.questao);
    console.log(this.roteiroId);
  }

}
