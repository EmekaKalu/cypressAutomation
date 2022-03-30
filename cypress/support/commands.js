// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import lwaLog from "./pageObjects/liveetLogin"

//
    Cypress.Commands.add('login', (email, password) => {
        const LwaLog = new lwaLog();
        LwaLog.getUsername().type(email)
        LwaLog.getPassword().type(password)
        LwaLog.loginButton().click()
    })

    Cypress.Commands.add('eventDate', (year, month, day) => {
        cy.get('.rdtSwitch').dblclick()
        cy.get('.rdtYear').contains(year).click()
        cy.get('.rdtMonth').contains(month).click()
        cy.get('.rdtDay').invoke('attr', 'data-value', day).contains(day).click()
    })
    
    Cypress.Commands.add('tSDate', (year, month, day) => {
        cy.get('div.rdtPicker tr th').contains('March 2022').click()
        cy.get('div.rdtPicker tr th').contains('2022').click()
        cy.get('.rdtYear').contains(year).click()
        cy.get('.rdtMonth').contains(month).click()
        cy.get('div.rdtPicker tr td').invoke('attr', 'data-value', day).contains(day).invoke('show').scrollIntoView().click({force : true})
        //cy.get('tr td')
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
