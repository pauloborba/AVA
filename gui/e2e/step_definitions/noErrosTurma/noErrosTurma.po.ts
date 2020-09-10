import { browser, by, element } from 'protractor';
import { Http } from '@angular/http';
import { Turma } from '../../../src/app/shared/turma.model';

export class AuxPage {
  private serverURL = 'http://localhost:3000';
  private guiURL = 'http://localhost:4200';

  public navigateTo(page: string) {
    browser.get('http://localhost:4200/populate');
    return browser.get(this.guiURL + '/' + page);
  }

  public logAs(cpf: string) {
    return browser.getCurrentUrl()
      .then(url => browser.get(`${url}?cpf=${cpf}`));
  }

  public getTurmas(turmaId): Turma[] {
    browser.get(this.serverURL + '/turma/' + turmaId)
      .then(() => {
        browser.getPageSource()
          .then(function (res) {
            const bodyHtml = /<body.*?([\s\S]*)<body>/.exec(res)[1];
            console.log('GIGG ' + JSON.parse(bodyHtml));
          });
      });
    return null;
  }

  public acessoTurma(turma: string) {
    return browser.getCurrentUrl()
      .then(url => browser.get(url.replace('s?', '-home?id=IF688&')));
  }

  public estatisticasButton() {
    return element(by.css('html > app-turma-home > div > div > app-gerenciar-turma > div > button:nth-child(2)'));
  }

  public errosById(id: string) {
    return element(by.id(id)).element(by.className('erros')).getText();
  }
}