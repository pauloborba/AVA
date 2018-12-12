Feature: Tempo medio de cada questão no roteiro

Scenario: Tempo médio de resolução aparece no relatório de roteiro
Given Eu estou na página de "Estatistica Roteiro"
And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
And O aluno "Guilherme Lima" finalizou à Questão "1"" do roteiro "Testes" em "15min"
And O aluno "Mario Victor" concluiu o roteiro "Testes"
And O aluno "Mario Victor" finalizou à Questão "1" do roteiro "Testes" em "45min"
When O professor vai para a página de relatório do roteiro "Testes".
And O professor acessa a aba "Questões"
Then O professor pode ver a Questão "1" com Tempo Médio de "30min".
