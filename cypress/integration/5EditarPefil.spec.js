/// <reference types="cypress" />

describe('Editar Perfil', () => {

    it('usuário logado, ao acessar o perfil, edita a sua biografia inserindo nela um texto', () => {

        cy.visit('/')
        cy.loginComSucesso()
        cy.editarPerfil()


    })
    
})