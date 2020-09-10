import { Component, OnInit } from '@angular/core';
import {PessoaService} from '../shared/service/pessoa.service'
import { Router, ActivatedRoute } from '@angular/router';

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
  }


  public redirect(cpf:String){
    this.router.navigate(['/turmas'],{queryParams: {cpf: cpf}});
  }

  public redirectToCadastro(){
    this.router.navigate(['/cadastro-pessoa']);
  }

  public cpfExistent(cpf:String, senha:String):Boolean{
    this.pessoaService.getPessoa(cpf)
      .then(
        value => {
          if(value.senha == senha){
            this.redirect(cpf);
            return true;
          }
          else{
            return false;
          }
        }
      )
      .catch(
        reason => console.log("oa deu ruim")
      )
      return false;
  }

  public checkExistent(cpf:String, senha:String) : Boolean{
      // Make get to check if there is an aluno with that user
    return (this.cpfExistent(cpf, senha))
  }



  ngOnInit() {
    
  }

}
