class HomePage {

    getnameBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getgenderbox()
    {
        return cy.get('select')
    }
}

export default HomePage