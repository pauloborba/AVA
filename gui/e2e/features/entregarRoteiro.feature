Feature: Entregar Roteiro

Scenario: Entregar o roteiro sem questões Pendentes
Given A questão "3" do roteiro "Refatoracao" está com status "Concluida"
And O roteiro "Refatoracao" tem "3" questões
And Eu estou na tela de resolução do roteiro "Refatoracao"
And A questão "1" está com status "Concluida"
And A questão "2" está com status "Desistida"
When Eu tento entregar o roteiro de "Refatoracao"
Then Uma mensagem aparece dizendo que o roteiro foi entregue
And  O status do roteiro muda para "Entregue".


Scenario: Entregar o roteiro com questão Pendente
Given A questão "3" do roteiro "Refatoracao" está com status "Concluida"
And O roteiro "Refatoracao" tem "3" questões
And Eu estou na tela de resolução do roteiro "Refatoracao"
And Eu conclui a questão "3"
And A questão "2" está com status "Pendente"
When Eu tento entregar o roteiro de "Refatoracao"
Then Uma mensagem aparece dizendo que o roteiro foi não foi entregue devido a pendências.
And A questão "2" aparece para ser respondida