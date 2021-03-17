/// <reference types="Cypress"/>

describe ('test jenkins project', function () {
    it ('Login to Orbit test web', function() {
        cy.visit('http://orbitclientui.test.vggdev.com', { retryOnNetworkFailure: true });
        cy.wait(3000)
        cy.contains('Sign In').click()
        cy.get(':nth-child(1) > .withIcon > .form-control').type("pontius@yopmail.com")
        cy.get(':nth-child(2) > .withIcon > .form-control').type("P0ntius.")
        cy.get(".btn").click({force:true})
        cy.wait(12000)
        
    })
})
