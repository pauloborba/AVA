import { defineSupportCode } from 'cucumber';
import { questoesPage } from './desistirQuestao.po';
import { element, by } from 'protractor';

defineSupportCode(({ Given, When, Then }) => {
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    chai.should();
    const expect = chai.expect;
    const page = new questoesPage;
    
    //always true


    //Eu estou na tela de resolução do roteiro "Testes"
    Given(/^Eu estou na tela de resolução do roteiro "([A-Za-z]*)"$/, (roteiro) => {
        // Navega para a tela de roteiros do aluno
        page.navigateTo();
        expect(page.getTitle()).to.eventually.equal('TaGui');
    });

    //O roteiro "Testes" tem "4" questões
    Given(/^O roteiro "([A-Za-z]*)" tem "(\d*)" questões$/, (roteiro, nQuestao) => {
        //actuall code
        expect(page.getNQuestoesRoteiroTestes).to.equal((nQuestao));
    
    });

    // Estou na questão "1"
    // Estou na questão "4"
    Given(/^Estou na questão "(\d*)"$/, (questaoAtual) => {
        expect(page.getNoQuestaoAtual1()).to.equal((questaoAtual));
        expect(page.getNoQuestaoAtual4()).to.equal((questaoAtual));
    });

    //A questão "1" tem o status "Pendente"
    Given(/^A questão "(\d*)" tem status "([A-Za-z]*)"$/, (questaoAtual, statusQuestao) => {
        expect(page.getNoQuestaoAtual1()).to.equal((questaoAtual));
    });

    //Eu envio uma pergunta sobre a questão "4"
    //Eu envio uma pergunta sobre a questão "1"
    When(/^Eu envio uma pergunta sobre a questão "(\d*)"$/, (questaoAtual) => {
        expect(page.getNoQuestaoAtual4()).to.equal((questaoAtual));
        expect(page.getNoQuestaoAtual1()).to.equal((questaoAtual));
        page.getAskButton().click();
    });

    //A questão "1" recebe o status "Pendente"
    //A questão "4" recebe o status "Pendente"
    Then(/^A questão "(\d*)" recebe o status "([A-Za-z]*)"$/, (questaoAtual, statusQuestao) => {
        expect(page.getNoQuestaoAtual1()).to.equal((questaoAtual));
    });

    //A questão "2" aparece para ser respondida
    //A questão "1" aparece para ser respondida
    Then(/^A questão "(\d*)" aparece para ser respondida$/, (questaoAtual) => {
        expect(page.getNoQuestaoAtual2()).to.equal((questaoAtual));
        expect(page.getNoQuestaoAtual1()).to.equal((questaoAtual));
    });

});