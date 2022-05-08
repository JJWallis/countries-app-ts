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
         .should('have.css', 'color', 'rgb(17, 21, 23)')
         .click()
         .should('have.css', 'color', 'rgb(255, 255, 255)')
   })

   it.only('stores theme preference on click', () => {
      cy.clearLocalStorage().should((ls) =>
         expect(ls.getItem('darkTheme')).to.eq(null)
      )

      cy.contains('Dark Mode')
         .click()
         .should(() => expect(localStorage.getItem('darkTheme')).to.eq('true'))
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

it('country card click directs to details page', () => {
   cy.get(':nth-child(1) > a > .eafvQC')
      .click()
      .url()
      .should('include', '/details/')
      .get('.sc-pGacB > a > .sc-crrszt')
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}`)
})
