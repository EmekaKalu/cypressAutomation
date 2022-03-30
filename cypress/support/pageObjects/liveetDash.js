class lwaD {
    getOrganizer(){
        return cy.get(':nth-child(3) > .nav-link')
    }
    getEventManager(){
        return cy.get(':nth-child(4) > .nav-link')
    }
}
export default lwaD