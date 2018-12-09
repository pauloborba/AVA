import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-matricula',
  templateUrl: './cadastro-matricula.component.html',
  styleUrls: ['./cadastro-matricula.component.css']
})
export class CadastroMatriculaComponent implements OnInit {

  constructor(
 //   private alunoService: MatriculaService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {

  }

}
