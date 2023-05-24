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
    });

})
