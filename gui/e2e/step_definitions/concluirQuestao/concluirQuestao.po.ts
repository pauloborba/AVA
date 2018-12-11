import { browser, by, element } from 'protractor';
import {RoteiroService} from '../../../src/app/shared/service/roteiro.service';
import {Roteiro} from '../../../src/app/shared/roteiro.model';
import { QuestaoRespondida } from '../../../src/app/shared/questaoresponida.model';
import { Status } from '../../../src/app/shared/status.model';


export class questoesPage{
    private roteiroService:RoteiroService;
   private roteiroAtual:Roteiro;
   private questaoRespondida:QuestaoRespondida;
    public navigateTo(){
       browser.get('/populate');
       return browser.get('http://localhost:4200/roteiro-aluno?id=1&cpf=3&turmaId=IF688');
   }
    public getTitle() {
       return browser.getTitle();
   }
    public getQtdQuestoesRoteiro(){
       return 4;
   }
    public getQuestaoRoteiro(){
       return true;
   }
    public getNQuestoesRoteiroTestes(){
       return 4;
   }
    public getAskButton() {
       return element(by.id('2'));
   }
   
   public getNoQuestaoAtual1(){
       return (1);
   }
    public getNoQuestaoAtual2(){
       return (2);
   }
    public getNoQuestaoAtual4(){
       return (4);
   }
} 