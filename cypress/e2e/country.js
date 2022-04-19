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

   it('practice kent', () => {
      cy.findByText(/where in the world/gi).then((subject) => {
         subject
         debugger
      })
      should('have.text', 'here in the world')
   })
})
