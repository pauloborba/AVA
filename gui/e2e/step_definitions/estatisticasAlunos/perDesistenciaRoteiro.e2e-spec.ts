import { defineSupportCode } from 'cucumber';
import { browser } from 'protractor';
import { Http } from '@angular/http';
import { async } from 'q';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;


defineSupportCode(function ({ Given, When, Then }) {
  
// Scenario: Percentual de desistências aparece no relatório de roteiro
// Given Eu estou na página de "Estatistica Roteiro"
// And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
// And O aluno "Guilherme Lima" respondeu à Questão "1" do roteiro "Testes"
// And O aluno "Mario Victor" concluiu o roteiro "Testes"
// And O aluno "Mario Victor" desistiu da Questão "1" do roteiro "Testes"
// When O professor vai para a página de relatório do roteiro "Testes"
// And O professor acessa a aba "Questões"
// Then O professor pode ver a Questão "1" com Desistência de "50%"


  // Given Eu estou na página de "Estatistica Roteiro"
  Given('Eu estou na página de {string}', (page) => {
    // browser.get("http://localhost:4200/TODO");
  });

  // And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
  // And O aluno "Mario Victor" concluiu o roteiro "Testes"
  Given('O aluno {string} concluiu o roteiro {string}', (aluno, roteiro) => {
    // auxpage.logAtTurmaPageAs(cpf.toString());
  });

  // And O aluno "Guilherme Lima" finalizou à Questão "1" do roteiro "Testes"
  // And O aluno "Mario Victor" finalizou à Questão "1" do roteiro "Testes"
  Given('O aluno {string} finalizou à Questão "([^\"]*)" do roteiro {string}', (aluno, noquestao, nomeRoteiro) => {
    // auxpage.getTurmas(turmaId);
  });

  // When O professor vai para a página de relatório do roteiro "Testes"
  When('O professor vai para a página de relatório do roteiro {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
  });

  // And O professor acessa a aba "Questões"
  When('O professor acessa a aba {string}', function (string) {
      // Write code here that turns the phrase above into concrete actions
  });

  // Then O professor pode ver a Questão "1" com Desistência de "50%"
  Then('O professor pode ver a Questão "([^\"]*)" com Desistência de "([^\"]*)"', (noquestao, perDesistencia) => {
      // Write code here that turns the phrase above into concrete actions
  });
});
