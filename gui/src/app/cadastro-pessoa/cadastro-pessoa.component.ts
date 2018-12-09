import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/pessoa.model';
import {PessoaService} from '../shared/service/pessoa.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  public redirect(CPF:String){
    this.router.navigate(['']);
  }

  constructor(
    private alunoService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  cadastroNovoPessoa(CPF:string, Nome:string, Email:string, Senha:string){
    var pessoa = new Pessoa;
    pessoa.cpf = CPF;
    pessoa.email = Email;
    pessoa.nome = Nome;
    pessoa.senha = Senha;
    if(this.alunoService.addPessoa(pessoa)){
      this.redirect(CPF);
    }
    else{
      console.log("oa deu ruim");
    }
  }

  ngOnInit() {
  }

}
