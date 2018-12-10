import { Component, OnInit } from '@angular/core';
import {RoteiroService} from '../shared/service/roteiro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roteiro-professor',
  templateUrl: './roteiro-professor.component.html',
  styleUrls: ['./roteiro-professor.component.css']
})
export class RoteiroProfessorComponent implements OnInit {

  private cpfatual;
  private id;
  private render:string;

  public setRender(r:string){
    this.render =r;
  }

  public renderAtual():string{
    return this.render;
  }

  constructor(
    private roteiroService: RoteiroService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit() {
    this.route
        .queryParams
        .subscribe(params => {
            this.cpfatual = params['cpfAtual'];
            this.id = params['id'];
        });
  }

}
