import { Component, OnInit, Input } from '@angular/core';
import { TurmaService } from '../shared/service/turma.service';
import { Turma } from '../shared/turma.model'
import { Router, ActivatedRoute } from '@angular/router';
import { Pessoa } from '../shared/pessoa.model'
import { PessoaService } from '../shared/service/pessoa.service'
import {Roteiro} from '../shared/roteiro.model'
import {RoteiroService} from '../shared/service/roteiro.service'

@Component({
  selector: 'app-mostrar-roteiros',
  templateUrl: './mostrar-roteiros.component.html',
  styleUrls: ['./mostrar-roteiros.component.css']
})
export class MostrarRoteirosComponent implements OnInit {

  @Input()
  cpfAtual:string;
  @Input()
  turmaAtual:string;

  private roteiros:Roteiro[];

  public redirectAcessarRoteiro(id:string){
    this.router.navigate(['/roteiro-aluno'],{queryParams: {id:id}});
  }


  constructor(
    private roteiroService: RoteiroService,
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit() {
    this.roteiros = new Array<Roteiro>();  
    this.turmaService.getRoteiros(this.turmaAtual).then(value => {
      value.forEach(e =>{
        this.roteiroService.getRoteiro(e.id).then(value => {
          this.roteiros.push(value);
        })
      });
    });
  }

}
