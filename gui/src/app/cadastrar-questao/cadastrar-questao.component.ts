import { Component, OnInit, Input } from '@angular/core';
import {RoteiroService} from '../shared/service/roteiro.service';
import { Questao } from '../shared/questao.model';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.css']
})
export class CadastrarQuestaoComponent implements OnInit {

  @Input()
  private cpfAtual;
  @Input()
  private id;




  constructor(
    private roteiroService: RoteiroService,
  ) { }

  public criarQuestao(pergunta:string, resposta:string): Boolean {
    // Make get to check if there is an aluno with that user
    let q = new Questao;
    q.pergunta = pergunta;
    q.respostaEsperada = resposta;
    this.roteiroService.addQuestao("0.14542286462426346", q)
    .then(
      value => {
        if(pergunta !== ""){
          console.log("cadastrei");
          return true;
        }else{
          console.log("deu um erro, talvez a pergunta esteja vazia");
          return false;
        }
      }

    )
    .catch(
      reason => console.log("oa deu ruim")
    )
    return false;

}

  ngOnInit() {
    this.id = "070";
  }

}
