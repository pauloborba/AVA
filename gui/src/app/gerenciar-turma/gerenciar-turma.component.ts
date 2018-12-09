import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-turma',
  templateUrl: './gerenciar-turma.component.html',
  styleUrls: ['./gerenciar-turma.component.css']
})
export class GerenciarTurmaComponent implements OnInit {

  @Input()
  cpfAtual:string;
  @Input()
  turmaAtual:string;

  private render:string;


  public setRender(r:string){
    this.render =r;
  }

  public renderAtual():string{
    return this.render;
  }

  constructor() { }

  ngOnInit() {
  }

}
