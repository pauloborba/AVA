import { Component, OnInit, Input } from '@angular/core';
import {Status} from '../shared/status.model';
import {RoteiroService} from '../shared/service/roteiro.service';
import {Roteiro} from '../shared/roteiro.model'
import { MatriculaService } from '../shared/service/matricula.service';
import { ActivatedRoute } from '@angular/router';
import { QuestaoRespondida } from '../shared/questaoresponida.model';

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
  private roteiroId: string;
  private cpfAluno: string;
  private turmaId: string;

  private qtdQuestoes:number;
  private questoesRespondidas:QuestaoRespondida[];


  constructor(
    private roteiroService:RoteiroService,
    private matriculaService:MatriculaService,
    private route: ActivatedRoute,
  ) { this.questoesRespondidas = []
  }

  public getProxima(nQuestao:number):number{
    //Proxima questão não existe
   if(nQuestao == this.qtdQuestoes){
     //Vai para proxima questao pendente
     for(var i =1;i<=this.qtdQuestoes;i++){
       if(this.questoesRespondidas[i].status == Status.Pendente){
         return i;
       }
     }
   }else{
     //Proxima questão existe e é "branco"
     if(this.questoesRespondidas[nQuestao
+1].status == undefined){
       //Vai pra próxima questão
       return ++nQuestao
  ;
     }

      //Proxima questão existe e é "desistida" ou "concluida"
     if(this.questoesRespondidas[nQuestao
+1].status == Status.Concluida || this.questoesRespondidas[nQuestao].status == Status.Desistida){
       //Vai pra a próxima pendente
       for(var i = nQuestao
  ;i<=this.qtdQuestoes;i++){
         if(this.questoesRespondidas[i].status == Status.Pendente){
           return i;
         }
       }
       for(var i = 1;i<nQuestao
  ;i++){
         if(this.questoesRespondidas[i].status == Status.Pendente){
           return i;
         }
       }
     }
    //Proxima questão existe e é "pendente"
    if(this.questoesRespondidas[nQuestao
+1].status == Status.Pendente){
      //Vai pra ela
      return ++nQuestao
;
    }
  }
  return -1;
 }

  private submitResposta(respostaQ:string){
    //Post para resposta
    /*
      CENARIO DE BORBA 1 e 2
    */



    const qr = new QuestaoRespondida;
    qr.resposta = respostaQ;
    this.matriculaService.addQuestaoRespondida(this.cpfAluno, this.turmaId, this.roteiroId, this.nQuestao, qr);

    let proximaQuestao = this.getProxima(this.nQuestao);
    if(proximaQuestao == -1){
      this.nQuestao
 = 1;
    }else{
      this.nQuestao
 = proximaQuestao;
    } 
  }


  ngOnInit() {
    this.nQuestao = 1;
    this.route
        .queryParams
        .subscribe(params => {
            this.roteiroId = params['id'];
            this.cpfAluno = params['cpf'];
            this.turmaId = params['turmaId'];
        });
    this.roteiroService.getNoQuestoes(this.roteiroId).then(value => {this.qtdQuestoes = value
      console.log(this.qtdQuestoes)
      for (var i = 1; i <= this.qtdQuestoes; i++){
        this.questoesRespondidas[i] = new QuestaoRespondida;
      }}); 
  }
  

}
