/// <reference types="cypress"/>

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatorios', () => {
    cy.visit('http://192.168.1.3:8080/')
    cy.get('#search-input').type('homem aranha')
    cy.get('#search-button').click
    cy.get('#clear-button').click
    cy.get('#results-section > p').should('contain' , 'Filme encontrado')
    cy.get('#signup-firstname').type('Leonardo')
    cy.get('#signup-lastname').type('Baldo')
    cy.get('#signup-email').type('leobaldo@gmail.com')
    cy.get('#signup-phone').type('123456')
    cy.get('#signup-password').type('Senha123@')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})