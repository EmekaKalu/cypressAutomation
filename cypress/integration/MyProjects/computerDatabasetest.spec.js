/// <reference types= "cypress" />

describe('computer database', () => {
    beforeEach(() => {
        cy.visit('https://computer-database.herokuapp.com/computers')
    });

    // This is to test that a computer can be created
    it('Tc_1.1', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('Apple Inc.')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
    });

    //Ensure a user can not delete a ewly created computer by pressing the back button
    it('Tc_1.2', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer1')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
        cy.go('back'.length,'2')
        cy.get('#searchbox').type('Honda computer1')
        cy.get('#searchsubmit').click()
    });

    it('Tc_1.3', () => {
        cy.get('#add').click()
        cy.get('#name').type('    ')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.4', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 2')
        cy.get('#introduced').type('0000-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });

    it('Tc_1.5', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 3')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('0000-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });

    it('Tc_1.6', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 4')
        cy.get('#introduced').type('2012-20-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });

    it('Tc_1.7', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 4')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-30-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });

    it('Tc_1.8', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 4')
        cy.get('#introduced').type('2012-02-50')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });
    
    it('Tc_1.9', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 4')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-50')
        cy.get('#company').select('RCA')
        cy.get('.primary').click()
        cy.get('.error > .input > .help-inline').should('exist')
    });

    it('Tc_1.10', () => {
        cy.get('#searchbox').type('Honda Computer')
        cy.get('#searchsubmit').click()
    });

    it('Tc_1.11', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#name').clear('#name').type('Honda computer new')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
    });

    it('Tc_1.12', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').clear('#introduced').type('1999-01-01')
        cy.get('#discontinued').clear('#introduced').type('1999-01-01')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
    });

    it('Tc_1.13', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#company').select('IBM')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
    });

    it('Tc_1.14', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#name').clear('#name')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.15', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('0000-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.16', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('0000-03-02')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.17', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('2012-50-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.18', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-50-02')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.19', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('2012-02-50')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });

    it('Tc_1.20', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.contains('Honda computer 2').click()
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-50')
        cy.get('.primary').click()
        cy.get('.error > label').should('exist')
    });
    
    it('Tc_1.21', () => {
        cy.get('#searchbox').type('Honda computer 2')
        cy.get('#searchsubmit').click()
        cy.get('.topRight > .btn').click()
        cy.get('.alert-message').should('exist')
    });
    
    it('Tc_1.22', () => {
        cy.get('#add').click()
        cy.get('#name').type('Honda computer 10')
        cy.get('#introduced').type('2012-02-03')
        cy.get('#discontinued').type('2013-03-02')
        cy.get('#company').select('Apple Inc.')
        cy.get('.primary').click()
        cy.get('.alert-message').should('exist')
        cy.get('#searchbox').type('Honda computer 10')
        cy.get('#searchsubmit').click()
        cy.get('.topRight > .btn').click()
        cy.get('.alert-message').should('exist')
        cy.go('back'.length,'2')
        cy.get('#searchbox').type('Honda computer 10')
        cy.get('Nothing to display').should('exist')
    });

});