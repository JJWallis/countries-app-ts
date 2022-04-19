/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('/')
})

describe('theme toggle', () => {
   it('changes theme on click', () => {
      cy.contains('Dark Mode')
         .should('have.text', 'Dark Mode')
         .should('have.css', 'color', 'rgb(17, 21, 23)')
         .click()
         .should('have.css', 'color', 'rgb(255, 255, 255)')
   })
})

describe('country card', () => {
   it('maps to details route in url', () => {
      cy.get(':nth-child(1) > a > .eafvQC').click()
      cy.url().should('include', '/details/')
   })
})

describe('search input', () => {
   it('updates correctly on user input', () => {
      cy.findByTestId('search-input')
         .should('have.value', '')
         .should('have.focus')
         .type('france')
         .should('have.value', 'france')
         .clear()
         .should('have.value', '')
   })

   it('enables and disables search icon on valid input', () => {
      cy.findByTestId('search-icon').should('be.disabled')
      cy.findByTestId('search-input').type('france')
      cy.findByTestId('search-icon').should('be.enabled').click()
   })
})
