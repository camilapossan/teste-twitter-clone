/// <reference types="cypress" />

describe('Logout', () => {

    it('Quando o usuário escolher sair do sistema, deve ser feito o logout', () => {

        cy.visit('/')
        cy.loginComSucesso()
        cy.wait(4000)
        cy.sair()       

    })
    
})

