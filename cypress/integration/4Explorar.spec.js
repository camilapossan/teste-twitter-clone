/// <reference types="cypress" />

describe('Abrir o campo "explorar" e fazer pesquisa válida', () => {

    it('Ao clicar em explorar, devo ser redirecionada para este conteúdo', () => {

        cy.visit('/')
        cy.loginComSucesso()
        cy.wait(4000) 
        cy.explorar()



    })
})
