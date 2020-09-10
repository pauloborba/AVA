Feature: Número de erros da turma em  um roteiro
	Como um instrutor 
	Eu quero ter acesso a quantidade de erros da turma em cada um dos Roteiros
    Para que eu possa ter uma ideia geral do desempenho da turma

Scenario: Instrutor checa o número de questões erradas por turma
Given Eu estou na página de "turmas"
And Eu estou logado com o CPF "1"
And A turma "IF688" teve "12" erros no roteiro de "Requisitos" com ID "1"
When Eu acesso a turma "IF688"
And Eu acesso "Estatisticas" da turma "IF688"
Then Eu consigo ver que a turma "IF688" teve "12" erros no roteiro de "Requisitos" com ID "1"
