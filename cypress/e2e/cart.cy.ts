/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add and remove item from cart', () => {
    // visitar a home
    cy.visit('/')

    // procurar um jogo e clicar no botao de carrinho
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar outro jogo e clica no botao de carrinho
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // procurar outro jogo e clica no botao de carrinho
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
    })

    // verifica se o icone de carrinho tem o numero de jogos
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // abre o carrinho e verifica se tem os jogos lá
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    //fecha o carrinho
    cy.findAllByLabelText(/cart items/i)
    .first()
    .click()

    // procura pelos jogo adicionado e remove
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procura pelos jogo adicionado e remove
    cy.getByDataCy('game-card').eq(1).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // procura pelos jogo adicionado e remove
    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
    })

    // verifica se o icone de carrinho não tem nada
    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // abre o carrinho e verifica se ta vazio
    cy.findAllByLabelText(/shopping cart/i).first().click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', { name: /Your cart is empty/i }).should('exist')
    })

    cy.findAllByLabelText(/shopping cart/i).first().click()
  })
})
