/// <reference path="../support/index.d.ts" />

import { priceFields, platformFields, sortFields, genreFields } from '../../src/utils/filter/fields'

describe('Explore page', () => {
  beforeEach(() => {
    cy.visit('/games')
  })
  it('should render filters columns', () => {

    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    cy.getFields(sortFields)
    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(genreFields)
  })

  it('should show 15 games and show more games when show more is clicked', () => {
    // cy.visit('/games')
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.wait(500)
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i ).click()

    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('FREE').should('exist')
    })

    cy.findByText(/highest to lowest/i ).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText(/^\$\d+(\.\d{1,2})?/)
        .invoke('text')
        .then($el => $el.replace('$', ''))
        .then(parseFloat)
        .should('be.gt', 0)
    })
  })
})
