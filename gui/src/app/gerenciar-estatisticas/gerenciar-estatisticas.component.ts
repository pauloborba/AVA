import { Component, OnInit, Input } from '@angular/core';
import { TurmaService } from '../shared/service/turma.service';
import { MatriculaService } from '../shared/service/matricula.service';
import { Meta } from '../shared/meta.model';
import { QuestaoRespondida } from '../shared/questaoresponida.model';
import { RoteiroService } from '../shared/service/roteiro.service';

@Component({
  selector: 'app-gerenciar-estatisticas',
  templateUrl: './gerenciar-estatisticas.component.html',
  styleUrls: ['./gerenciar-estatisticas.component.css']
})
export class GerenciarEstatisticasComponent implements OnInit {

  @Input()
  private cpfAtual: string;
  @Input()
  private turmaAtual: string;
  
  private roteirosId: string[];
  private nomeRoteiros: Map<string,string>;
  private noQuestoesRoteiro: Map<string, number>;
  private alunosCpf: string[];
  private noAcertos: Map<string, number>;
  private noErros: Map<string, number>;

  constructor(
    private turmaService: TurmaService,
    private matriculaService: MatriculaService,
    private roteiroService: RoteiroService,
  )
  {
    this.roteirosId = [];
    this.noQuestoesRoteiro = new Map<string, number>();
    this.nomeRoteiros = new Map<string,string>();
    this.alunosCpf = [];
    this.noAcertos = new Map<string, number>();
    this.noErros = new Map<string, number>();
  }

  ngOnInit() {
    this.turmaService.getTurma(this.turmaAtual).then(turma => {
      // Get all alunos cpf
      turma.alunos.forEach(aluno => {
        this.alunosCpf.push(aluno.cpf);
      });
      // Get all roteiros id
      turma.roteiros.forEach(roteiro => {
        this.roteirosId.push(roteiro.id);
        this.roteiroService.getRoteiro(roteiro.id)
        .then(r => {
          // Get number of questions
          this.nomeRoteiros[roteiro.id] = r.nome;
          this.noQuestoesRoteiro[roteiro.id] = r.noQuestoes;
        });
      });
    })
    .then(() => {
      this.alunosCpf.forEach(cpf => {
        this.roteirosId.forEach(roteiroId => {
          this.matriculaService.getQuestoesRespondidas(cpf, this.turmaAtual, roteiroId)
          .then(questoesRespondidas => {
            for (var i = 1; i <= this.noQuestoesRoteiro[roteiroId]; i++) {
              if (questoesRespondidas[i].nota === Meta.MPA || questoesRespondidas[i].nota === Meta.MA) {
                if (this.noAcertos[roteiroId]) {
                  this.noAcertos[roteiroId]++;
                }
                else this.noAcertos[roteiroId] = 1;
              }
              else {
                if (this.noErros[roteiroId]) {
                  this.noErros[roteiroId]++;
                }
                else this.noErros[roteiroId] = 1;
              }
            }
          });
        });
      });
    });
  }
}
