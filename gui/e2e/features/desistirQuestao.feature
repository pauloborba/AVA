Feature: Desistir da questão

Scenario: Desisti uma questão que estava com status pendente e que não é a última
Given Eu estou na tela de resolução do roteiro de Id "1"
And A questão "1" do roteiro de Id "1" está com status "Pendente"
And O roteiro de Id "1" tem "4" questões
When Eu confirmo a desistencia da questão "1"
Then A questão "1" do roteiro de Id "1" recebe status "Desistida"
And A questão "2" do roteiro de Id "1"  aparece para ser respondida

Scenario: Desisti a última questão, com questões pendentes
Given A questão "4" do roteiro "Refatoracao"
And O roteiro "Refatoracao" tem "4" questões
And Eu estou na tela de resolução do roteiro "Refatoracao"
And Eu desisti a questão "4"
And A questão "1" está com status "Pendente"
When Eu confirmo a desistencia da questão "4"
Then A questão "4" recebe status "Desistida"
And A questão "1" aparece para ser respondida