/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
        
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('guilherme10.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, guilherme10.teste (não é guilherme10.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('guiz.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
      
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('guilherme10.teste@teste.com.br')
        cy.get('#password').type('teste@12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', ' A senha fornecida para o e-mail guilherme10.teste@teste.com.br está incorreta')
      
    })

    
});




