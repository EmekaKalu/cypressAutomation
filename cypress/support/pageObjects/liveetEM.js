class lwaEM {
    createEvent(){
        return cy.get('a.btn').contains('Create Event')
    }
    selectOrg(){
        return cy.get('select')
    }
    eventName(){
        return cy.get('#event_name')
    }
    getCalendar(){
        return cy.get('input[name="event_date_time"].form-control')
    }
    eventAddress(){
        return cy.get('#address')
    }
    eventDesc(){
        return cy.get('#event_desc')
    }
    selectFile(){
        return cy.get('input[type=file]')
    }
    nextBtn(){
        return cy.get('.MuiButtonBase-root')
    }
    getTicketName(){
        return cy.get('input[name="tickets[0].ticket_name"]')
    }
    getAvailableTicket(){
        return cy.get('input[name="tickets[0].ticket_population"]')
    }
    getTicketCost(){
        return cy.get('input[name="tickets[0].ticket_cost"]')
    }
    getTicketDiscount(){
        return cy.get('input[name="tickets[0].ticket_discount"]')
    }
    getTicketDesc(){
        return cy.get('textarea[name="tickets[0].ticket_desc"]')
    }
    getNextBtn(){
        return cy.get(':nth-child(2) > .MuiButtonBase-root')
    }
    getTDcalendar(){
        return cy.get(':nth-child(3) > .rdt > .form-control')
    }
    getTDcalendar2(){
        return cy.get(':nth-child(4) > .rdt > .form-control')
    }
}
export default lwaEM