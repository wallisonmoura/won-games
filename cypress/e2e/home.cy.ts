/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home section', () => {
    cy.visit('/')

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

    });


})
