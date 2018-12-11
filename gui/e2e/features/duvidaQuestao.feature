Feature: Fazer pergunta sobre questão

Scenario: Realizar pergunta sobre questão que não é a última
Given Eu estou na tela de resolução do roteiro "Testes"
And O roteiro "Testes" tem "4" questões
And Estou na questão "1"
When Eu envio uma pergunta sobre a questão "1"
Then A questão "1" recebe o status "Pendente"
And A questão "2" aparece para ser respondida

Scenario: Realizar pergunta sobre a última questão, tendo questões pendentes
Given Eu estou na tela de resolução do roteiro "Testes"
And O roteiro "Testes" tem "4" questões
And Estou na questão "4"
And A questão "1" tem o status "Pendente"
When Eu envio uma pergunta sobre a questão "4"
Then A questão "4" recebe o status "Pendente"
And A questão "1" aparece para ser respondida

