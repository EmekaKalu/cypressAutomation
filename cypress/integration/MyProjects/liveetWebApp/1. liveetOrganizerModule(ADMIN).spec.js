/*
    To show depth in my understanding of cypress I was tasked with writing a script to automate test cases on The Liveet app.
    In this script I will show various KEY skills among others in cypress such as;
    - My use of Fixtures to store test data and and call into my test.
    - My use of page object model structure.
    - Working with the cypress.json file.
    - use of hooks (BeforeEach).
*/
/// <reference types= 'cypress' />

//Imports page objects contents to this file
import lwaD from "../../../support/pageObjects/liveetDash";
import lwaOrg from "../../../support/pageObjects/liveetOrg";

describe('LiveetApp (ADMIN) Organizer Module Test Suite', () => {

    const LwaD = new lwaD();
    const LwaOrg = new lwaOrg();

    //To allow fixtures to be used in all test cases
    beforeEach(function() {

        //This calls values from the liveetData.json file
        cy.fixture('liveetData').then(function(data) {
            this.lwadata = data
        })

        //Here I am calling the baseurl (aUrl) which is configured in the Cypress.json
        cy.visit(Cypress.env('aUrl'))
    });


    it('Verify Admin can create an organizer account', function(){
        
        //Here I created a custom login command which logins the Admin portal with data from my liveetData.json file using fixtures
        cy.login(this.lwadata.username, this.lwadata.password)
        cy.wait(5000)

        //clicks the organizer button to access organizer module
        LwaD.getOrganizer().click()
        cy.wait(5000)

        //clicks the Add organizer button
        LwaOrg.addOrganizer().click()
        
        //These commands fills the create organizer form
        LwaOrg.newName().type(this.lwadata.name)

        LwaOrg.newEmail().type(this.lwadata.email)

        LwaOrg.newPhone().type(this.lwadata.phoneNum)

        LwaOrg.newAddress().type(this.lwadata.address)

        LwaOrg.newUsername().type(this.lwadata.user)

        LwaOrg.newPass().type(this.lwadata.pass)

        LwaOrg.createOrg().click()

        //TODO Add assertions

    });

    it('verify Admin can manage sub-staffs created by Organizers', () => {
        
        LwaD.getOrganizer().click()
        cy.wait(3000)
       
        LwaOrg.viewStaffOrg().click({force : true})
        cy.wait(5000)

        LwaOrg.disableStaff().click()

        LwaOrg.logOutStaff().click()
        
    });

    it('verify admin can update Organizer information', () => {
        
        LwaOrg.updateStaff.click()
        LwaOrg.newName().type(this.lwadata.newName)
        LwaOrg.newAddress().type(this.lwadata.newAddress)
        LwaOrg.updateStaffBtn.click()

    });
});