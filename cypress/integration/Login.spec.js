/// <reference types="Cypress"/>

describe ('test jenkins project', function () {
    it ('Login to Orbit test web', function() {
        cy.visit('http://orbit.vigipay.co/', { retryOnNetworkFailure: true });
        cy.wait(12000)
        cy.contains('Sign In').click()
        cy.get(':nth-child(1) > .withIcon > .form-control').type("carison@yopmail.com")
        cy.get(':nth-child(2) > .withIcon > .form-control').type("P@ssw0rd")
        cy.get(".btn").click({force:true})
        cy.wait(12000)
        
    })
})
