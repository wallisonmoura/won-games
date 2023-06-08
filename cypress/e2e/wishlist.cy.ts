/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessa a página de wishlist não logado
    cy.visit('/wishlist')

    // redireciona e faz signIn
    cy.signIn()
    cy.wait(15000)

    // verificar se a wishlist está vazia
    cy.findByText(/Your wishlist is empty/i).should('exist')

    // vou pegar um jogo e adicionar na wishlist
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findAllByLabelText(/add to wishlist/i).click()
    })

    // verificar se o jogo está lá
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover este jogo
    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    // verificar se está vazio
    cy.findByText(/Your wishlist is empty/i).should('exist')
  })
})
