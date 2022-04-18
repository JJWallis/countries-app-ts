/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('')
})

describe('intial test', () => {
   it('does nothing', () => {
      cy.get('.sc-dlfnuX')
   })
})
