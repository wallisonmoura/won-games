/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home section', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

    cy.shouldRenderShowcase({ name: "New Games" })
    cy.shouldRenderShowcase({ name: "Most Popular Games" })
    cy.shouldRenderShowcase({ name: "Upcoming Games" })
    cy.shouldRenderShowcase({ name: "Free Games" })

  })
})
