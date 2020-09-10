import { defineSupportCode } from 'cucumber';
import { AuxPage } from './noPerguntasTurma.po';
import { browser } from 'protractor';
import { Http } from '@angular/http';
import { async } from 'q';

defineSupportCode(function ({ Given, When, Then }) {
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    chai.should();
    const expect = chai.expect;

    const auxpage = new AuxPage();

    // Given(/^Eu estou na página de "([^\"]*)"/, (page) => {
    //     auxpage.navigateTo(`${page}`);
    // });

    // Given(/^Eu estou logado com o CPF "([^\"]*)"/, (cpf) => {
    //     auxpage.logAs(cpf.toString());
    // });

    Given(/^A turma "([^\"]*)" teve "([^\"]*)" perguntas no roteiro de "([^\"]*)" com ID "([^\"]*)"/, (turmaId, noperguntas, nomeRoteiro, roteiroId) => {
    });

    // When(/^Eu acesso a turma "([^\"]*)"/, function (turma) {
    //     auxpage.acessoTurma(`${turma}`);
    // });

    // When(/^Eu acesso "([^\"]*)" da turma "([^\"]*)"/, function (botao, turma) {
    //     auxpage.estatisticasButton().click();
    // });

    Then(/^Eu consigo ver que a turma "([^\"]*)" teve "([^\"]*)" perguntas no roteiro de "([^\"]*)" com ID "([^\"]*)"/, function (turma, perguntas, roteiro, id) {
        expect(auxpage.perguntasById(`${id}`)).to.eventually.equal(`Número de Perguntas: ${perguntas}`);
    });
});