Feature: As a professor
         I want to register students
         So that I can manage their learning goals

Scenario: Registering student with non registered cpf
Given I am at the students page
Given I cannot see a student with cpf "683" in the students list
When I try to register the student "Paulo" with cpf "683"
Then I can see "Paulo" with cpf "683" in the students list
