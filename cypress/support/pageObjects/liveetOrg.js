class lwaOrg{
    
    addOrganizer(){
        return cy.get('button.btn.btn-primary').contains('Add Organizer')
    }

    newName(){
        return cy.get('#OrganizationName')
    }

    newEmail(){
        return cy.get('#OrganizationEmail')
    }

    newPhone(){
        return cy.get('#OrganizationPhone')
    }
    
    newAddress(){
        return cy.get('#OrganizationAddress')
    }

    newUsername(){
        return cy.get('#OrganizationUsername')
    }

    newPass(){
        return cy.get('#OrganizationPassword')
    }

    createOrg(){
        return cy.get('button.btn.btn-primary').contains('Create Organizer')
    }

    viewStaffOrg(){
        return cy.get('a.btn.btn-primary.btn-sm').contains('View Staff')
    }

    disableStaff(){
        return cy.get('.d-flex > :nth-child(1)')
    }

    logOutStaff(){
        return cy.get('.d-flex > :nth-child(2)')
    }

    updateStaff(){
        return cy.get('[index="0"] > :nth-child(8) > .d-flex > :nth-child(2)')
    }

    updateStaffBtn(){
        return cy.get('.modal-footer > .btn-primary')
    }
}
export default lwaOrg