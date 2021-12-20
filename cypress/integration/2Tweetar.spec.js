/// <reference types="cypress" />

describe('Tweetar', () => {

    it('Usuário logado consegue tweetar mensagens', () => {

        cy.visit('/')
        cy.loginComSucesso()
        cy.wait(4000)
        cy.tweetar()       

    })
    
})