/// <reference types="cypress" />

describe('A dropdown test', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //to test static dropdown
        cy.get('select').select('option1').should('have.value','option1')

        //to test dynamic
        cy.get('#autocomplete').type('ke')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

         if($e1.text()==="Kenya")
            {
                $e1.trigger("click")
            }

})
    });
});