/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('')
})

describe('theme toggle', () => {
   it('changes theme on click', () => {
      cy.get('.sc-iJuVqt')
         .should('have.css', 'color', 'rgb(17, 21, 23)')
         .click()
         .should('have.css', 'color', 'rgb(255, 255, 255)')
   })
})
