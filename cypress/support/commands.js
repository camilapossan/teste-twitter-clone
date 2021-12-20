// ***********************************************
Cypress.Commands.add('loginComSucesso', () => {
    
    cy.get('input[type=email]').type('camila@Live.com')
    cy.get('input[type=password]').type('123456')
    cy.get('button[type=submit').click()
    cy.get('.sc-fznKkj > span').should('have.text', 'Home')//Valida que estou na tela inicial
    
    
})

Cypress.Commands.add('sair', () => {

    cy.get('.sc-AxhUy > div').click()
    cy.get(':nth-child(3) > p').click()

})

Cypress.Commands.add('tweetar', () => {

    cy.get('.new-tweet > textarea').type('Hoje está fazendo um lindo dia aqui em minha cidade')
    cy.get('.new-tweet-action > .sc-fzplWN').click()

    
})


Cypress.Commands.add('explorar', () => {

        cy.get(':nth-child(3) > a > span').click()//Abre a aba Explorar
        cy.get('p').should('have.text', 'Use the search bar to find tags, people and tweets')//Valida que está na aba explorar
        cy.get('.tabs > :nth-child(3)').click()//Clica em users para pesquisar um usuário
        cy.get('input').type('teste{enter}')//pesquisar com enter
        cy.get(':nth-child(1) > .sc-fzplWN').click()//dar follow ou unfollow no primeiro da lista

    
})


Cypress.Commands.add('editarPerfil', () => {

    cy.get(':nth-child(6) > a > span').click()//acessa aba de perfil
    cy.get('.handle').should('have.text', '@camila182')//valida que está no perfil
    cy.get('a > .sc-fzplWN').click()//clica no botão editar perfil
    cy.get('.sc-fznWOq > .sc-fznKkj').should('have.text', 'Edit Profile')//valida tela de editar perfil
    cy.get('#bio').type('123456')//insere o texto que deseja incluir na bio
    cy.get('.sc-fznMAR > .sc-fzplWN').click()//salva mudanças

})