import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roteiro-aluno',
  templateUrl: './roteiro-aluno.component.html',
  styleUrls: ['./roteiro-aluno.component.css']
})
export class RoteiroAlunoComponent implements OnInit {

  private roteiroId:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.roteiroId = params['id'];
        });
  }

}
