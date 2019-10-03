/// <reference types="cypress" />
it('books hotel (all pages)', () => {
  cy.visit('/')
  cy.contains('h1', 'Book Hotel')
  cy.get('#first').type('Joe')
  cy.get('#last').type('Smith')
  cy.get('#field1').type('Field 1 value text')
  cy.get('#field2').type('Field 2 value text')
  cy.get('#field3').type('Field 3 value text')
  cy.get('#field4').type('Field 4 value text')
  cy.get('#email').type('my-email@foo.bar')
})
