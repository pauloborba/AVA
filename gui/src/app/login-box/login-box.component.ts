import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../shared/pessoa.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})

export class LoginBoxComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService) { 
    this.pessoaService = pessoaService;
  }


  public redirect(CPF:String){
    this.router.navigate(['']);
  }

  public checkExistent(CPF:String, senha:String) : Boolean{
      // Make get to check if there is an aluno with that user
    this.pessoaService.getPessoa(CPF)
      .then(
        value => {
          if(value.senha == senha){
            this.redirect(CPF);
            return true;
          }
          else{
            return false;
          }
        }
      )
      .catch(
        reason => console.log("oa deu erro")
      )
      return false;
  }

  ngOnInit() {
    
  }

}
