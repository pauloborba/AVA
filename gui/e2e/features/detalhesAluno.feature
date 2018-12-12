Feature: Detalhes de alunos por roteiro

Scenario: Lista detalhada de alunos que realizaram o roteiro
Given Eu estou na página de "Estatistica Aluno"
And O roteiro "Testes" tem três questões
And O aluno "Guilherme Lima" concluiu o roteiro "Testes"
And O aluno "Guilherme Lima" respondeu à Questão "1" do roteiro "Testes" em "15min", tendo realizado "5" perguntas
And O aluno "Guilherme Lima" respondeu à Questão "2" do roteiro "Testes" em "30min", tendo realizado "1" perguntas
And O aluno "Guilherme Lima" desistiu da Questão "3" do roteiro "Testes" após "5min", tendo realizado "0" pergunta
When O professor vai para a página de relatório do roteiro "Testes"
And O professor acessa a aba "Alunos"
Then O professor pode ver o aluno "Guilherme Lima" com Tempo Total de "50min", Desistências de "33,3%", Perguntas marcando "6"