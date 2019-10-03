/// <reference types="cypress" />
const typeOptions = { delay: 35 }

describe('3 shorter tests', () => {
  const startOfSecondPageState = {
    currentStep: 2,
    email: 'my-email@foo.bar',
    field1a: 'Field 1a text value',
    field1b: 'Field 1b text value',
    field1c: 'Field 1c text value',
    field1d: 'Field 1d text value',
    field1e: 'Field 1e text value',
    first: 'Joe',
    last: 'Smith',
    username: ''
  }

  const startOfThirdPageState = {
    ...startOfSecondPageState,
    currentStep: 3,
    username: 'JoeSmith',
    field2a: 'Field 2a text value',
    field2b: 'Field 2b text value',
    field2c: 'Field 2c text value',
    field2d: 'Field 2d text value',
    field2e: 'Field 2e text value',
    field2f: 'Field 2f text value',
    field2g: 'Field 2g text value'
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('first page', () => {
    cy.log('First page')
    cy.contains('h1', 'Book Hotel 1')

    cy.get('#first').type('Joe', typeOptions)
    cy.get('#last').type('Smith', typeOptions)
    cy.get('#email').type('my-email@foo.bar', typeOptions)

    cy.get('#field1a').type('Field 1a text value', typeOptions)
    cy.get('#field1b').type('Field 1b text value', typeOptions)
    cy.get('#field1c').type('Field 1c text value', typeOptions)
    cy.get('#field1d').type('Field 1d text value', typeOptions)
    cy.get('#field1e').type('Field 1e text value', typeOptions)

    cy.contains('Next').click()

    cy.log('Second page')
    cy.contains('h1', 'Book Hotel 2')
    cy.window()
      .its('app.state')
      .should('deep.equal', startOfSecondPageState)
  })

  it('second page', () => {
    cy.window()
      .its('app')
      .invoke('setState', startOfSecondPageState)

    cy.log('Second page')
    cy.contains('h1', 'Book Hotel 2')

    cy.get('#username').type('JoeSmith', typeOptions)
    cy.get('#field2a').type('Field 2a text value', typeOptions)
    cy.get('#field2b').type('Field 2b text value', typeOptions)
    cy.get('#field2c').type('Field 2c text value', typeOptions)
    cy.get('#field2d').type('Field 2d text value', typeOptions)
    cy.get('#field2e').type('Field 2e text value', typeOptions)
    cy.get('#field2f').type('Field 2f text value', typeOptions)
    cy.get('#field2g').type('Field 2g text value', typeOptions)
    cy.contains('Next').click()

    cy.log('Third page')
    cy.contains('h1', 'Book Hotel 3')

    cy.window()
      .its('app.state')
      .should('deep.equal', startOfThirdPageState)
  })

  it('third page', () => {
    cy.window()
      .its('app')
      .invoke('setState', startOfThirdPageState)

    cy.log('Third page')
    cy.contains('h1', 'Book Hotel 3')

    cy.get('#field3a').type('Field 3a text value', typeOptions)
    cy.get('#field3b').type('Field 3b text value', typeOptions)
    cy.get('#field3c').type('Field 3c text value', typeOptions)
    cy.get('#field3d').type('Field 3d text value', typeOptions)
    cy.get('#field3e').type('Field 3e text value', typeOptions)
    cy.get('#field3f').type('Field 3f text value', typeOptions)
    cy.get('#field3g').type('Field 3g text value', typeOptions)
    cy.contains('button', 'Sign up').click()

    cy.contains('button', 'Thank you')
  })
})
