import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gerenciar-estatisticas',
  templateUrl: './gerenciar-estatisticas.component.html',
  styleUrls: ['./gerenciar-estatisticas.component.css']
})
export class GerenciarEstatisticasComponent implements OnInit {

  @Input()
  private cpfAtual:string;
  @Input()
  private turmaAtual:string;
  
  constructor() { }

  ngOnInit() {
  }

}
