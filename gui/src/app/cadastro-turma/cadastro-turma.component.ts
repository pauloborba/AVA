import { Component, OnInit } from '@angular/core';
import {TurmaService} from '../shared/turma.service';
import {Turma} from '../shared/turma.model'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.css']
})
export class CadastroTurmaComponent implements OnInit {

  public redirect(CPF:String){
    this.router.navigate(['']);
  }

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  cadastroNovaTurma(Id:string){
    var turma = new Turma;
    turma.id = Id;
    if(this.turmaService.addTurma(turma)){
      console.log("turma criada com sucesso");
    }
    else{
      console.log("turma já existe");
    }
  }

  ngOnInit() {
  }

}
