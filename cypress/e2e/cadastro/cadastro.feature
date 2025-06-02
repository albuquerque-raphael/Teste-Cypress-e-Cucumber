Feature: Registro de novo usuário

  Scenario: Cadastro com dados válidos
    Given que estou na página local de cadastro
    And preencho todos os campos obrigatórios com dados válidos
    When clico no botão de registrar
    Then devo ver a mensagem de boas vindas

  Scenario: Cadastro com e-mail já existente
    Given que estou na página local de cadastro
    And preencho os campos com um e-mail já cadastrado
    When clico no botão de registrar
    Then devo ver uma mensagem de erro informando que o e-mail já está em uso

  Scenario: Cadastro com campo obrigatório em branco
    Given que estou na página local de cadastro
    And deixo um ou mais campos obrigatórios em branco
    When clico no botão de registrar
    Then devo ver a mensagem de erro informando que os campos são obrigatórios

  Scenario: Validação do formato de e-mail inválido
    Given que estou na página local de cadastro
    And preencho o campo de e-mail com um formato inválido
    And preencho os demais campos corretamente
    When clico no botão de registrar
    Then devo ver uma mensagem de erro informando que o e-mail é inválido
