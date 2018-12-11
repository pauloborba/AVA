Feature: Desistir da questão

Scenario: Desisti uma questão que estava com status pendente e que não é a última
Given A questão "1" do roteiro "Refatoracao" está com status "Pendente"
And O roteiro "Refatoracao" tem "4" questões
And Eu estou na tela de resolução do roteiro "Refatoracao"
And Eu desisti da questão "1"
When Eu confirmo a desistencia da questão "1"
Then A questão "1" recebe status "Desistida"
And A questão "2" aparece para ser respondida