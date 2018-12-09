import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gerenciar-roteiros',
  templateUrl: './gerenciar-roteiros.component.html',
  styleUrls: ['./gerenciar-roteiros.component.css']
})
export class GerenciarRoteirosComponent implements OnInit {
  @Input()
  public cpfAtual:string;
  @Input()
  public turmaAtual:string;

  public adicionarRoteiro(){
    
  }
  
  constructor() { }

  ngOnInit() {
  }

}
