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
    

    Given(/^Eu estou na tela de resolução do roteiro de Id "(\d*)"$/, (roteiro) => {
        // Navega para a tela de roteiros do aluno
        page.navigateTo();
        expect(page.getTitle()).to.eventually.equal('TaGui');
    });

    Given(/^A questão "(\d*)" do roteiro de Id "(\d*)" está com status "([A-Za-z]*)"$/, (nQuestao, roteiro, status) => {
        // Dar um 
    
    });

    Given(/^O roteiro de Id "(\d*)" tem "(\d*)" questões$/, (idRoteiro, qtdQuestoesRoteiro) => {
        //
    });

    When(/^Eu confirmo a desistencia da questão "(\d*)"$/, (questaoAtual) => {
        page.getDesistirButton().click();
    });

    Then(/^A questão "(\d*)" do roteiro de Id "(\d*)" recebe status "([A-Za-z]*)"$/, (questaoAtual, roteiroId, statusQuestao) => {
      //
    });

    Then(/^A questão "(\d*)" do roteiro de Id "(\d*)" aparece para ser respondida$/, (questaoAtual, roteiroId) => {
        expect(page.getNoQuestaoAtual()).to.equal(1);
    });

});