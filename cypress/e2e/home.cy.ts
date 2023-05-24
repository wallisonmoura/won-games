/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home section', () => {
    cy.visit('/')

    cy.shouldRenderBanner()

  })
})
