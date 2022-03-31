/// <reference types= 'cypress' />

//Imports page objects contents to this file
import lwaD from "../../../support/pageObjects/liveetDash";
import lwaEM from "../../../support/pageObjects/liveetEM";
import lwaOrg from "../../../support/pageObjects/liveetOrg";

describe('LiveetApp (ADMIN) Event Manager Module Test Suite', () => {

    const LwaD = new lwaD();
    const LwaOrg = new lwaOrg();
    const LwaEM = new lwaEM();

    //To allow fixtures to be used in all test cases
    beforeEach(function() {

        //This calls values from the liveetData.json file
        cy.fixture('liveetData').then(function(data) {
            this.lwadata = data
        })

        //Here I am calling the baseurl (aUrl) which is configured in the Cypress.json
        cy.visit(Cypress.env('aUrl'))
        cy.viewport('macbook-15')
    });

    it('verify a user can create events with different event configurations ', function() {
        
        //here i called my custom command to allow us to login 
        cy.login(this.lwadata.username, this.lwadata.password)
        cy.wait(5000)

        //navigates to the Event manager module 
        LwaD.getEventManager().click()

        //clicks the create event button 
        LwaEM.createEvent().click()

        //This action selects an organizer of the event, for this test i will be using the user I created that is why I called newName from my LiveetData.jso file
        LwaEM.selectOrg().select(this.lwadata.newName)

        //This action inputs the event name 
        LwaEM.eventName().type('Coachella')
        
        //This clicks the event date button 
        LwaEM.getCalendar().click()

        //I created this custom command to pick the date from the date picker ('year', 'Month', 'date')
        cy.eventDate('2024', 'Mar', '5')

        //This will fill the address of the event 
        LwaEM.eventAddress().type(this.lwadata.address)

        //This will ive it a description 
        LwaEM.eventDesc().type('This is a test')

        //This Selects the event type
        cy.get('[value="Private"]').check({force : true})

        //This selects the event payment type 
        cy.get('[value="Paid"]').check({force : true})

        /*
        I got the css selector for the file upload button then used the select file method to upload the picture, 
        (Picture is in my Fixtures folder) I set the path for it to be retrieved 
        */
        LwaEM.selectFile().selectFile('../CYPRESSAUTOMATION/cypress/fixtures/cypresstest.png')

        //takes us to the next step in the event creation 
        LwaEM.nextBtn().click()
        cy.wait(3000)

        /*
            This part takes care of ticket classes,how many can be sold, how much they should be sold,
            among others 
        */

        //This names the class of the ticket 
        LwaEM.getTicketName().type('VIP')

        //This states how many should be sold 
        LwaEM.getAvailableTicket().type('100')

        //This shows cost per ticket
        LwaEM.getTicketCost().type('1000')

        //This inputs discount 
        LwaEM.getTicketDiscount().type('0')

        //this describes the ticket
        LwaEM.getTicketDesc().type('for the upper class')

        LwaEM.getNextBtn().click()

        //This clicks the timeline bundle
        cy.get(':nth-child(1) > .p-2').click()

        //This picks the number of turnstiles
        cy.get('#cost').type('1')

        //Clicks to open Calendar date picker 
        LwaEM.getTDcalendar().click()
        cy.tSDate('2024', 'Feb', '20')
        cy.wait(2000)
        LwaEM.getTDcalendar2().click().type('03/05/2024 12:00').click()
        cy.get(':nth-child(5) > .form-group').click()
        cy.get('[value="CAN_INVITE_RESTRICTED"]').check({force : true})
        cy.get('[value="CAN_TRANSFER"]').should('not.be.checked')
        cy.get('[value="CAN_RECALL"]').check({force : true}).should('be.checked')
        cy.get(':nth-child(2) > .MuiButtonBase-root').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('.btn-secondary').click()
    });

    it('verify Admin can approve payment ', function(){

        LwaD.getEventManager().click()
        cy.wait(3000)
        cy.get('div.jss3').contains('Approve Payment ').click()
        
    });

    it('verify Admin can update existing tickets', function(){
        LwaD.getEventManager().click()
        cy.get('div.jss3').contains('Tickets').click()
        cy.get('.d-flex > button.btn-primary').click()
        LwaEM.getTicketName().type('regular')
    });
})