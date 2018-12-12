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
// Given Eu estou na página de "Estatistica Aluno"
// And O roteiro "Testes" tem "3" questões
// And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
// And O aluno "Guilherme Lima" finalizou à Questão "1" do roteiro "Testes" em "15min", tendo realizado "5" perguntas
// And O aluno "Guilherme Lima" finalizou à Questão "2" do roteiro "Testes" em "30min", tendo realizado "1" perguntas
// And O aluno "Guilherme Lima" finalizou à Questão "3" do roteiro "Testes" em "5min", tendo realizado "0" perguntas
// When O professor vai para a página de relatório do roteiro "Testes"
// And O professor acessa a aba "Alunos"
// Then O professor pode ver o aluno "Guilherme Lima" com Tempo Total de "50min", Desistências de "33,3%", Perguntas marcando "6"

  // Given Eu estou na página de "Estatistica Aluno"
  Given('Eu estou na página de {string}', (page) => {
    // browser.get("http://localhost:4200/TODO");
  });

  Given('O roteiro {string} tem "([^\"]*)" questões', (roteiro, qtdquestoes) => {
    // browser.get("http://localhost:4200/TODO");
  });

  // And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
  Given('O aluno {string} concluiu o roteiro {string}', (aluno, roteiro) => {
    // auxpage.logAtTurmaPageAs(cpf.toString());
  });

  // And O aluno "Guilherme Lima" finalizou à Questão "1" do roteiro "Testes" em "15min", tendo realizado "5" perguntas
  // And O aluno "Guilherme Lima" finalizou à Questão "2" do roteiro "Testes" em "30min", tendo realizado "1" perguntas
  // And O aluno "Guilherme Lima" finalizou à Questão "3" do roteiro "Testes" em "5min", tendo realizado "0" perguntas
  Given('O aluno {string} finalizou à Questão "([^\"]*)" do roteiro {string} em {string}, tendo realizado "([^\"]*)" perguntas', (aluno, noquestao, nomeRoteiro, tempoconlusao, totalPergunta) => {
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

  // Then O professor pode ver o aluno "Guilherme Lima" com Tempo Total de "50min", Desistências de "33,3%", Perguntas marcando "6"
  Then('O professor pode ver o aluno "([^\"]*)" com Tempo Total de {string}, Desistência de "([^\"]*)", Perguntas marcando "([^\"]*)"', (aluno, tempoToal, perDesistencia, totalPerguntas) => {
      // Write code here that turns the phrase above into concrete actions
  });
});