import { defineSupportCode } from 'cucumber';
import { AuxPage } from './relatorioRoteiro.po';
import { browser } from 'protractor';
import { Http } from '@angular/http';
import { async } from 'q';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;

const auxpage = new AuxPage();

defineSupportCode(function ({ Given, When, Then }) {
  
  Given(/^Eu estou na página da "([^\"]*)"/, (page) => {
    // browser.get("http://localhost:4200/login");
  });
  Given(/^a turma obteve o percentual de acerto de "([^\"]*)"% para o roteiro de "([^\"]*)"/, (cpf) => {
    // auxpage.logAtTurmaPageAs(cpf.toString());
  });
  
  When('Eu acesso a turma {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
  });
  When('Eu acesso {string} da turma', function (string) {
      // Write code here that turns the phrase above into concrete actions
  });
  
  Then('And Eu posso ver o percentual de acerto de {string}% para o roteiro de "{string}"', function (string, string2, string3, string4) {
      // Write code here that turns the phrase above into concrete actions
  });
});
