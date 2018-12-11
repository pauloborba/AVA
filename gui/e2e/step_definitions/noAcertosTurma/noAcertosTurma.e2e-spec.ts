import { defineSupportCode } from 'cucumber';
import { AuxPage } from './noAcertosTurma.po';
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
  
  Given(/^Eu estou na página de "([^\"]*)"/, (page) => {
    // browser.get("http://localhost:4200/login");
  });
  Given(/^Eu estou logado com o CPF "([^\"]*)"/, (cpf) => {
    // auxpage.logAtTurmaPageAs(cpf.toString());
  });

  Given(/^A turma "([^\"]*)" teve "([^\"]*)" acertos no roteiro de "([^\"]*)" com ID "([^\"]*)"/, (turmaId, noAcertos, nomeRoteiro, roteiroId) => {
    // auxpage.getTurmas(turmaId);
  });
  When('Eu acesso a turma {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
  });
  When('Eu acesso {string} da turma {string}', function (string, string2) {
      // Write code here that turns the phrase above into concrete actions
  });
  Then('Eu consigo ver que a turma {string} teve {string} acertos no roteiro de {string}com ID {string}', function (string, string2, string3, string4) {
      // Write code here that turns the phrase above into concrete actions
  });
});
