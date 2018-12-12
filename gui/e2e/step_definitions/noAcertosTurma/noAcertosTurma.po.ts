import { browser, by, element } from 'protractor';
import { Http } from '@angular/http';
import { Turma } from '../../../src/app/shared/turma.model';

export class AuxPage {
  private serverURL = "http://localhost:3000";
  private guiURL = "http://localhost:4200";
  
  public navigateTo(page: string) {
    return browser.get(this.guiURL + "/" + page);
  }

  public logAtTurmaPageAs(cpf: string) {
    return browser.get(this.guiURL + "/turmas?cpf=" + cpf);
  }

  public getTurmas(turmaId): Turma[] {
    browser.get(this.serverURL + "/turma/" + turmaId)
    .then(() => {
      browser.getPageSource()
      .then(function(res) {
        var bodyHtml = /<body.*?([\s\S]*)<body>/.exec(res)[1];
        console.log("GIGG " + JSON.parse(bodyHtml));
      });
    });
    return null; 
  }

  // public getAutoAvaliacaoLink() {
  //   return element(by.id('autoAvaliacaoLink'));
  // }

  // public getTHs() {
  //   return element.all(by.tagName('th'));
  // }

  // public getG0(name: string) {
  //   return element(by.id(`${name}G0`));
  // }

  // public getG1(name: string) {
  //   return element(by.id(`${name}G1`));
  // }
}
