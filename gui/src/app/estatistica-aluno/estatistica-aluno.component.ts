import { Component, OnInit, Input } from '@angular/core';
import {RoteiroService} from '../shared/service/roteiro.service';
import {Roteiro} from '../shared/roteiro.model';
import {RespostaRoteiro} from '../shared/respostaroteiro.model';
import {TurmaService} from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import {QuestaoRespondida} from '../shared/questaoresponida.model'
import { MatriculaService } from '../shared/service/matricula.service';

@Component({
  selector: 'app-estatistica-aluno',
  templateUrl: './estatistica-aluno.component.html',
  styleUrls: ['./estatistica-aluno.component.css']
})
export class EstatisticaAlunoComponent implements OnInit {
  
  @Input()
  roteiroId:string;
  @Input()
  turmaId:string;

  private alunos:Pessoa[];
  private alunoRoteiro:RespostaRoteiro[];

  constructor(
    private turmaService:TurmaService,
    private roteiroService:RoteiroService,
    private matriculaService:MatriculaService,
  ) { }

  ngOnInit() {
    this.alunoRoteiro = new Array<RespostaRoteiro>();
    
    this.turmaService.getAlunos(this.turmaId).then(value => {
      this.alunos = value;
      for (var i =0;i<this.alunos.length;i++){
        this.matriculaService.getQuestoesRespondidas(this.alunos[i].cpf, this.turmaId, this.roteiroId).then(value => {
          this.alunoRoteiro[i] = new RespostaRoteiro;
          this.alunoRoteiro[i].questoesRespondidas = value;
        })
      }
    })

    

    
  }

}
