/// <reference types="cypress" />

import HomePage from '../pageObjects/HomePage'

describe('My presentation', () => {
    
    before(function (){
        cy.fixture('presentation').then(function (data) {  
            this.data=data 
        })
    });

    //This shows my understanding hooks this will reload the page for every test case
    beforeEach(() => {

        //to visit the webpage
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        
        //this will set dimensions of the screen to match that of a 15inch macbook 
        cy.viewport('macbook-15')
    });

    

    it('submit registration with assertions', function (){

        //makes object a variable
        const homepage=new HomePage

        //calls the cypress command from the 
        homepage.getnameBox().type(this.data.name)
        homepage.getgenderbox().select(this.data.gender)
    });
});