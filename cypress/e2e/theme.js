/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('/')
})

it('test invalid network request', () => {
   // cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
   //    statusCode: 500,
   //    body: {},
   // })
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

it.only('country card click directs to details page', () => {
   cy.get(':nth-child(1) > a > .eafvQC')
      .click()
      .url()
      .should('include', '/details/')
      .get('.sc-pGacB > a > .sc-crrszt')
      .click()
      .url()
      .should('equal', 'http://localhost:3000/')
})
