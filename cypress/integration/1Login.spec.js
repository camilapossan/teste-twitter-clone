/// <reference types="cypress" />

describe('Login', () => {

    it('Ao autenticar com credenciais válidas, deve ser direcionado para a página inicial do sistema', () => {

        cy.visit('/')
        cy.loginComSucesso()       

    })
    
})