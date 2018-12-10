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

  constructor(
    private roteiroService: RoteiroService,
    private route: ActivatedRoute,
    private router: Router) { }

    public redirect(){
      this.router.navigate(['/gerenciar-turma']);
    }

    cadastroNovoRoteiro(nome:string){
        this.roteiro.nome = nome;
        this.roteiro.donoCpf = this.cpfAtual;
        this.roteiroService.addRoteiro(this.roteiro).then(
          () => this.redirect()
        )
    }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfAtual = params['cpfAtual'];
        });
  }

}
