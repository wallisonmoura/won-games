/// <reference path="../support/index.d.ts" />

describe('Game page', () => {
  it('should render gape page sections', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Cyberpunk 2077/i}).should('exist')
      cy.findByText(/This game is part of your Welcome Offer!/i).should('exist')
      cy.findByText('$199.90').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')

    })

    // gallery
    cy.findAllByRole('button', { name: /Thumb \-/i }).should('have.length.gt', 0)
  })
})
