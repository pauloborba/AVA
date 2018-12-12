Feature: Quantidade de perguntas feitas por roteiro

Scenario: Quantidade de perguntas aparece no relatório de roteiro
Given Eu estou na página de "Estatistica Roteiro"
And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
And O aluno "Guilherme Lima" finalizou à Questão "1" do roteiro "Testes", tendo realizado "5" perguntas
And O aluno "Mario Victor" concluiu o roteiro "Testes"
And O aluno "Mario Victor" finalizou à Questão "1" do roteiro "Testes", tendo realizado "10" perguntas
When O professor vai para a página de relatório do roteiro "Testes"
And O professor acessa a aba "Questões"
Then O professor pode ver a Questão "1" com um total de perguntas de "15"