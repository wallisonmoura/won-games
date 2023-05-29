/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home section', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: "New Games", highlight: false })
    cy.shouldRenderShowcase({ name: "Most Popular Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Free Games", highlight: true })

  })
})
