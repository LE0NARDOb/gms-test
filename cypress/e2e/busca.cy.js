/// <reference types="cypress"/>

describe('US-12 : Funcionalidade: busca de filmes', () => {
    beforeEach(() => {
        cy.visit('http://192.168.1.4:8080/');
    });

    it('Deve buscar filme com sucesso', () =>{
    cy.get('#search-input').type('matrix')
    cy.get('#search-button').click()
    cy.get('#results-section').should('contain' , 'Matrix')
    });

    it('Deve Buscar filmes com sucesso de uma lista', () =>{
        cy.fixture('filmes').then((filmes) =>{
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain' , filmes[0].titulo)
        })
    });

    it.only('Deve Buscar filmes copm sucessp da lista inteiro', () => {
        cy.fixture('filmes').each((filmes) =>{
            cy.get('#search-input').clear().type(filmes[0].titulo)
            cy.get('#search-button').click({force: true})
            cy.get('#results-section').should('contain' , filmes[0].titulo)
        })
    });

});


