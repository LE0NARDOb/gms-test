/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('https://golden-movie-studio.vercel.app/');
  });

  it('CT-01 - Cadastro com campos obrigatórios preenchidos corretamente', () => {
    const email = `leo${Date.now()}leobaldo@gmail.com`;
    cy.preencherCadastro('Leo', 'Baldo', email, '123456', 'Teste@123456');
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!');
  });

  it('CT-02 - Validar mensagem de erro com campo nome inválido', () => {
    const email = `teste${Date.now()}@invalido.com`;
    cy.preencherCadastro('leo1', 'Baldo', email, '123456', 'Teste@123456');
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos');
  });

  //it('CT-03 - Validar mensagem de erro com email inválido', () => {
    //cy.preencherCadastro('Leonardo', 'Baldo', 'email-invalido', '123456', 'Teste@123456');
    //cy.get('#signup-response').should('contain', 'Por favor, insira um email válido');
  //});

  //it('CT-04 - Validar mensagem de erro com senha fraca', () => {
    //const email = `teste${Date.now()}@invalido.com`;

    //cy.preencherCadastro('Leonardo', 'Baldo', email, '123456', 'SenhaFraca123');
    //cy.get('#signup-response').should('contain', 'A senha deve conter pelo menos um caractere especial');
    
   
    //cy.preencherCadastro('Leonardo', 'Baldo', email, '123456', 'Abc1@');
    //cy.get('#signup-response').should('contain', 'A senha deve ter no mínimo 8 caracteres');
  //});

  //it('CT-05 - Validar mensagem de erro quando senhas não coincidem', () => {
    //const email = `teste${Date.now()}@invalido.com`;
    //cy.preencherCadastro('Leonardo', 'Baldo', email, '123456', 'Teste@123456', 'Teste@654321');
    //cy.get('#signup-response').should('contain', 'As senhas não coincidem');
  //});

  //it('CT-06 - Validar mensagem de erro com campo telefone inválido', () => {
    //const email = `teste${Date.now()}@invalido.com`;
    //cy.preencherCadastro('Leonardo', 'Baldo', email, 'abc123', 'Teste@123456');
    //cy.get('#signup-response').should('contain', 'O telefone deve conter apenas números');
  //});
//});

//Cypress.Commands.add('preencherCadastro', (nome, sobrenome, email, telefone, senha, confirmarSenha = senha) => {
  //cy.get('#firstName').type(nome);
  //cy.get('#lastName').type(sobrenome);
  //cy.get('#email').type(email);
  //cy.get('#phone').type(telefone);
  //cy.get('#password').type(senha);
  //cy.get('#confirmPassword').type(confirmarSenha || senha);
  //cy.get('#submit-button').click();
});