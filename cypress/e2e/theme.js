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

   // it('loading title displays and disappears', () => {
   //    cy.contains(/loading/gi)
   //       .should()
   //       .not('not.exist')
   // })
})

describe('country card', () => {
   it('maps to details route in url', () => {
      cy.get(':nth-child(1) > a > .eafvQC').click()
      cy.url().should('include', '/details/')
   })
})
