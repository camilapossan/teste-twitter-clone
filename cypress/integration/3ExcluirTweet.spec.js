/// <reference types="cypress" />

describe('Excluir primeiro tweet da lista', () => {

    it('Deletar o tweet mais recente postado pelo usuário logado', () => {

        cy.visit('/')
        cy.loginComSucesso()
        cy.wait(4000)
        cy.get(':nth-child(1) > .tweet-info > .tweet-stats > :nth-child(4) > span > .sc-AxiKw').click()

    })
    
})