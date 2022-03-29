/// <reference types= "cypress" />

//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
  //This function is to describe the test case
  it(`Instagram login`, function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/")
    //spy on field
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
    //type your username
    .type('elderluxury');
    //spy password
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
    //type password
    .type('Drbossm@j0r1');
    //to click
    cy.get('.sqdOP > .qF0y9').click();
  });
});