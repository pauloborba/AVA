import { Component, OnInit } from '@angular/core';
import {RoteiroService} from '../shared/service/roteiro.service';
import {Roteiro} from '../shared/roteiro.model';
import {RespostaRoteiro} from '../shared/respostaroteiro.model';


@Component({
  selector: 'app-estatistica-aluno',
  templateUrl: './estatistica-aluno.component.html',
  styleUrls: ['./estatistica-aluno.component.css']
})
export class EstatisticaAlunoComponent implements OnInit {

  private alunoRoteiro:RespostaRoteiro[];

  constructor() { }

  ngOnInit() {
  }

}
