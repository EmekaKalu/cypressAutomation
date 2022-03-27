class lwaLog {
    
    getUsername(){
        return cy.get(':nth-child(3) > .form-control')
    }

    getPassword(){
        return cy.get(':nth-child(5) > .form-control')
    }

    loginButton(){
        return cy.get('.btn')
    }

}
export default lwaLog