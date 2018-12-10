import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Roteiro} from '../shared/roteiro.model';
import {RoteiroService} from '../shared/service/roteiro.service';

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
  
  private roteiros:Roteiro[];

  public redirectAcessarRoteiro(id: string){
    this.router.navigate(['./roteiro-professor'],{queryParams:{cpfAtual:this.cpfAtual, id:id}})
  }

  public adicionarRoteiro(){
    this.router.navigate(['/cadastro-roteiro'],{queryParams:{cpfAtual:this.cpfAtual, turmaAtual:this.turmaAtual}});
  }
  
  constructor(
    private roteiroService:RoteiroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.roteiroService.getRoteirosDono(this.cpfAtual).then(
        (value) => {this.roteiros = value}
    )
  }

}
