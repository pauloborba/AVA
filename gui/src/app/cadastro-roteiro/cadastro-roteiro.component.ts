import { Component, OnInit } from '@angular/core';
import { Roteiro } from '../shared/roteiro.model';
import {RoteiroService} from '../shared/service/roteiro.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-roteiro',
  templateUrl: './cadastro-roteiro.component.html',
  styleUrls: ['./cadastro-roteiro.component.css']
})
export class CadastroRoteiroComponent implements OnInit {

  private roteiro:Roteiro;
  private cpfAtual:string;
  private turmaAtual:string;

  constructor(
    private roteiroService: RoteiroService,
    private route: ActivatedRoute,
    private router: Router) { }

    public redirect(){
      this.router.navigate(['/turma-home'],{queryParams:{cpf:this.cpfAtual, id:this.turmaAtual}});
    }

    cadastroNovoRoteiro(nome:string){
        this.roteiro.nome = nome;
        this.roteiro.donoCpf = this.cpfAtual;
        this.roteiro.id = '-1';
        this.roteiroService.addRoteiro(this.roteiro).then(
          () => this.redirect()
        )
    }

  ngOnInit() {
    this.roteiro = new Roteiro;
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfAtual = params['cpfAtual'],
            this.turmaAtual = params['turmaAtual']
        });
  }

}
