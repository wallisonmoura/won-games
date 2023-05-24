/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Add Testing Library Commands
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider')
      .find('.slick-active')
      .should('contain', 'Cyberpunk 2077');
    cy.get('.slick-slider')
      .find('.slick-active')
      .findByRole('link', { name: /buy now/i })
      .should('exist');


    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.get('.slick-slider')
      .find('.slick-active')
      .should('contain', 'ELEX II');
    cy.get('.slick-slider')
      .find('.slick-active')
      .findByRole('link', { name: /buy now/i })
      .should('exist');

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.get('.slick-slider')
      .find('.slick-active')
      .should('contain', 'Horizon Zero Dawn');
    cy.get('.slick-slider')
      .find('.slick-active')
      .findByRole('link', { name: /buy now/i })
      .should('exist');

})
