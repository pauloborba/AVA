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
  private perguntas: string[] = [];
  private questaoAtual: number = 1;
  private cpfAluno: string;
  private turmaId: string;
  private duvida: boolean = false;

  constructor(
    private roteiroService : RoteiroService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.roteiroId = params['id'];
            this.cpfAluno = params['cpf'];
            this.turmaId = params['turmaId'];
        });
    this.roteiroService.getQuestoes(this.roteiroId).then(value => {
      for (let e of Object.keys(value)) {
        this.perguntas.push(value[e].pergunta);
      }
    });
  }

  clickBotaoEvent(status: Status, resposta: string) {
    // 0 Pendente
    // 1 Desistida
    // 2 Concluida
    console.log(this.questaoAtual + " <> " + this.perguntas.length);
    if (this.questaoAtual <= this.perguntas.length) {
      this.duvida = false;
      const qr = new QuestaoRespondida;
      qr.pergunta = this.perguntas[this.questaoAtual-1];
      qr.resposta = resposta;
      qr.status = status;
      qr.tempo = -999;
      console.log(this.cpfAluno, this.turmaId, this.roteiroId, this.questaoAtual, qr);
      this.matriculaService.addQuestaoRespondida(this.cpfAluno, this.turmaId, this.roteiroId, this.questaoAtual, qr); 
      this.questaoAtual++;
    }
    else 
      return; // TODO finish roteiro
  }
  setDuvida(b: boolean) {
    this.duvida = b;
  }



}
