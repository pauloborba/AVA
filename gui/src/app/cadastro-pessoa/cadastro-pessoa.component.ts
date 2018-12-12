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

  public redirect(cpf:String){
    this.router.navigate(['/login']);
  }

  constructor(
    private alunoService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  cadastroNovoPessoa(cpf:string, Nome:string, Email:string, Senha:string){
    if(this.alunoService.addPessoa(this.makePessoa(cpf, Nome, Email, Senha))){
      this.redirect(cpf);
    }
    else{
      console.log("oa deu ruim");
    }
  }

  makePessoa(cpf:string, Nome:string, Email:string, Senha:string): Pessoa{
    var pessoa = new Pessoa;
    pessoa.cpf = cpf;
    pessoa.email = Email;
    pessoa.nome = Nome;
    pessoa.senha = Senha;
    return pessoa;
  }

  ngOnInit() {
  }

}
