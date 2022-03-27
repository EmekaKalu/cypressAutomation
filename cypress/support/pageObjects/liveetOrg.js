class lwaOrg{
    
    addOrganizer(){
        return cy.get('button.btn.btn-primary').contains('Add Organizer')
    }
}
export default lwaOrg