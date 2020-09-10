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
  private status:string="";

  private qtdQuestoes:number;
  private questaoAtual:number;
  private questoesRespondidas:QuestaoRespondida[];

  constructor(
    private roteiroService : RoteiroService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router){
      this.questoesRespondidas = []
  }

  public redirect() {
    this.router.navigate(['/turmas'],{queryParams: {cpf: this.cpfAluno, id:this.turmaId}});
  }

  public entregarRoteiro(){
    if(this.questaoAtual == 0){
      alert("roteiro concluido com sucesso");
      this.redirect();
    }
    else{
      alert("você não pode entregar, ainda tem questões pendentes!")
    }
  }


  public getProxima(questaoAtual:number):number{
     //Proxima questão não existe
    if(questaoAtual == this.qtdQuestoes){
      //Vai para proxima questao pendente
      for(var i =1;i<=this.qtdQuestoes;i++){
        if(this.questoesRespondidas[i].status == Status.Pendente){
          return i;
        }
      }
    }

    else{
      //Proxima questão existe e é "branco"
      if(this.questoesRespondidas[questaoAtual+1].status == undefined){
        //Vai pra próxima questão
        return ++questaoAtual;
      }

       //Proxima questão existe e é "desistida" ou "concluida"
      if(this.questoesRespondidas[questaoAtual+1].status == Status.Concluida || this.questoesRespondidas[questaoAtual].status == Status.Desistida){
        //Vai pra a próxima pendente
        for(var i = questaoAtual;i<=this.qtdQuestoes;i++){
          if(this.questoesRespondidas[i].status == Status.Pendente){
            return i;
          }
        }
        for(var i = 1;i<questaoAtual;i++){
          if(this.questoesRespondidas[i].status == Status.Pendente){
            return i;
          }
        }
      }
      //Proxima questão existe e é "pendente"
      if(this.questoesRespondidas[questaoAtual+1].status == Status.Pendente){
        //Vai pra ela
        return ++questaoAtual;
      }
    }
    return -1;
  }

  public changeQuestion(modo:string){

    if(modo == 'Desistir'){
      this.questoesRespondidas[this.questaoAtual].status = Status.Desistida;
      this.matriculaService.addQuestaoRespondida(this.cpfAluno, this.turmaId, this.roteiroId, this.questaoAtual, this.questoesRespondidas[this.questaoAtual]);
    }

    let proximaQuestao = this.getProxima(this.questaoAtual);
    if(proximaQuestao == -1){
      this.questaoAtual = 0;
    }
    else{
      this.questaoAtual = proximaQuestao;
    }
    
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
    this.roteiroService.getNoQuestoes(this.roteiroId).then(value => {this.qtdQuestoes = value
      console.log(this.qtdQuestoes)
      for (var i = 1; i <= this.qtdQuestoes; i++){
        this.questoesRespondidas[i] = new QuestaoRespondida;
      }}); 
  }
}
