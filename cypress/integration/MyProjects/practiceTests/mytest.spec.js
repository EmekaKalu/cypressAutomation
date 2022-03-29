///<reference types= "cypress" />

const { each } = require("cypress/types/lodash");

describe('My test', () => {
    beforeEach(() => {
        
        cy.viewport('iphone-4')
        cy.visit('https://www.instagram.com/')
        
    })

    it('first', () => {
        cy.get('h1').should('exist')
    });

    it('second', () => {
        cy.get('h1').contains('Instagram')        
    });

});