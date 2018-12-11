Feature: Concluir questão

Scenario: Concluir uma questão que estava com status pendente e que não é a última
Given A questão "1" do roteiro "Testes" está com status "Pendente"
And O roteiro "Testes" tem "4" questões
And Eu estou na tela de resolução do roteiro "Testes"
And Eu respondi a questão "1"
When Eu confirmo a conclusão da questão "1"
Then A questão "1" recebe status "Concluída"
And A questão "2" aparece para ser respondida

Scenario: Concluir a última questão que estava com status branco ou pendente, com questões pendentes
Given A questão "4" do roteiro "Testes" está com status "Branco"
And O roteiro "Testes" tem "4" questões
And Eu estou na tela de resolução do roteiro "Testes"
And Eu respondi a questão "4"
And A questão "1" está com status "Pendente"
When Eu confirmo a conclusão da questão "4"
Then A questão "3" recebe status "Concluída"
And A questão "1" aparece para ser respondida