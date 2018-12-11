import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Roteiro} from '../shared/roteiro.model';
import {RoteiroService} from '../shared/service/roteiro.service';
import {TurmaService} from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import { PessoaService } from '../shared/service/pessoa.service';
import { MatriculaService } from '../shared/service/matricula.service';
import { Meta } from '../shared/meta.model';
import { QuestaoRespondida } from '../shared/questaoresponida.model';

@Component({
  selector: 'app-gerenciar-roteiros',
  templateUrl: './gerenciar-roteiros.component.html',
  styleUrls: ['./gerenciar-roteiros.component.css']
})
export class GerenciarRoteirosComponent implements OnInit {
  @Input()
  public cpfAtual:string;
  @Input()
  public turmaAtual:string;
  
  private alunos: Pessoa[];
  private roteiros: Roteiro[];
  private noQuestoes: Map<string, number>;
  private estatisticas: Map<string, boolean>;
  private acertosAluno: Map<string, Map<string, number>>;
  private errosAluno: Map<string, Map<string, number>>;
  private desempenhoAluno: Map<string, Map<string, number>>;
  private noAcertos: Map<string, number>;
  private noErros: Map<string, number>;
  private desempenho: Map<string, number>;

  constructor(
    private roteiroService:RoteiroService,
    private route: ActivatedRoute,
    private router: Router,
    private turmaService: TurmaService,
    private pessoaService: PessoaService,
    private matriculaService: MatriculaService,
  ) { 
      this.alunos = [];
      this.roteiros = [];
      this.noQuestoes = new Map<string, number>();
      this.estatisticas = new Map<string, boolean>();
      this.acertosAluno = new Map<string, Map<string, number>>();
      this.errosAluno = new Map<string, Map<string, number>>();
      this.desempenhoAluno = new Map<string, Map<string, number>>();
      this.noAcertos = new Map<string, number>();
      this.noErros = new Map<string, number>();
      this.desempenho = new Map<string, number>();
    }

  ngOnInit() {
    this.roteiroService.getRoteirosDono(this.cpfAtual)
    .then((value) => {
          this.roteiros = value;
          value.forEach(roteiro => {
            this.noQuestoes[roteiro.id] = roteiro.noQuestoes;
            this.estatisticas[roteiro.id] = false;
          });
        }
    );

    this.turmaService.getAlunos(this.turmaAtual)
    .then(alunos => {
      // Gets cpf from all students
      alunos.forEach(aluno => {
        this.alunos.push(aluno);
      });

      // Gets all Pessoa data with students cpf info
      this.alunos.forEach((pessoa, index) => {
        this.pessoaService.getPessoa(pessoa.cpf)
        .then(value => {
          this.alunos[index] = value;
        });



        this.roteiros.forEach(roteiro => {
          this.matriculaService.getQuestoesRespondidas(pessoa.cpf, this.turmaAtual, roteiro.id)
          .then(qrs => {
            for (var i = 1; i < this.noQuestoes[roteiro.id]; i++) {
              if (this.isErro(qrs, i)) {
                if (this.noErros[roteiro.id]){
                  this.noErros[roteiro.id]++;
                } else this,this.noErros[roteiro.id] = 1
              }
              else {
                if (this.noAcertos[roteiro.id]){
                  this.noAcertos[roteiro.id]++;
                } else this.noAcertos[roteiro.id] = 1;
              } 
            }
            this.acertosAluno[pessoa.cpf] = this.noAcertos;
            this.errosAluno[pessoa.cpf] = this.noErros;
            const total = this.noAcertos[roteiro.id] + this.noErros[roteiro.id];
            
            this.desempenho[roteiro.id] = this.calculateDesempenho(roteiro.id, total); 
            this.desempenhoAluno[pessoa.cpf] = this.desempenho;
          })
        });


      });

    });
  }

  private isErro(map: Map<number, QuestaoRespondida>, index: number): boolean {
    return map[index].nota === Meta.MANA
  }

  private calculateDesempenho(roteiroId: string, total: number): number {
    return Math.round(100 * this.noAcertos[roteiroId] / total)
  }

  public redirectAcessarRoteiro(id: string){
    this.router.navigate(['./roteiro-professor'],{queryParams:{cpfAtual:this.cpfAtual, id:id}})
  }

  public adicionarATurma(turmaId: string, roteiroId: string): Boolean{
    
    this.turmaService.addRoteiro(this.turmaAtual, roteiroId)
    .then(
      value => {
        console.log("roteiro cadastrado");
        return true;
      }
    )
    return false;
  }

  public adicionarRoteiro() {
    this.router.navigate(['/cadastro-roteiro'],{queryParams:{cpfAtual:this.cpfAtual, turmaAtual:this.turmaAtual}});
  }

  public mostrarEstatisticas(roteiroId) {
    this.estatisticas[roteiroId] = !this.estatisticas[roteiroId];
  }
  

}
