import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página local de cadastro', () => {
  cy.visit('http://localhost:8080/index.html');
});

When('clico no botão de registrar', () => {
  cy.get('button[type="submit"]').click();
});

Then('devo ver a mensagem de boas vindas', () => {
  cy.contains('Cadastro realizado com sucesso!').should('be.visible');
});

Given('preencho todos os campos obrigatórios com dados válidos', () => {
  cy.get('input[name="username"]').type('Usuario Teste');
  cy.get('input[name="email"]').type(`testecypress${Date.now()}@email.com`);
  cy.get('input[name="password"]').type('Senha123!');
});

Given('preencho os campos com um e-mail já cadastrado', () => {
  cy.get('input[name="username"]').type('Teste');
  cy.get('input[name="email"]').type('emailjaexiste@email.com');
  cy.get('input[name="password"]').type('Senha123!');
});

Then('devo ver uma mensagem de erro informando que o e-mail já está em uso', () => {
  cy.contains('E-mail já cadastrado.').should('be.visible');
});

Given('deixo um ou mais campos obrigatórios em branco', () => {
  cy.get('input[name="email"]').type('teste@email.com');
  cy.get('input[name="password"]').type('Senha123!');
});

Then('devo ver a mensagem de erro informando que os campos são obrigatórios', () => {
  cy.contains('Todos os campos são obrigatórios.').should('be.visible');
});

Given('preencho o campo de e-mail com um formato inválido', () => {
  cy.get('input[name="username"]').type('Fulano');
  cy.get('input[name="email"]').clear().type('errado@'); // <= isso é inválido
});

Given('preencho os demais campos corretamente', () => {
  cy.get('input[name="password"]').type('Senha123!');
});

Then('devo ver uma mensagem de erro informando que o e-mail é inválido', () => {
  cy.get('#mensagem', { timeout: 5000 })
});

afterEach(function () {
  const testName = this.test.title.replace(/ /g, '-').toLowerCase();
  cy.screenshot(`final-${testName}`);
});