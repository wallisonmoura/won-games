/// <reference path="../support/index.d.ts" />

import { User, createUser } from "../support/generate"

describe('Checkout', () => {
  let user: User
  describe('Free games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      // criar um usuário
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.wait(5000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.wait(15000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)
      cy.wait(2000)

      // filtrar por jogos free
      cy.findByText(/highest to lowest/i).click()
      cy.wait(3000)
      cy.findByText(/free/i).click()
      cy.wait(3000)
      cy.url().should('contain', 'price_lte=0')
      cy.wait(3000)

      // adicionar o jogo no carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()


      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })
      cy.wait(22000)
      // encontrar um texto de só jogos free
      cy.findByText(/only free games, click buy and enjoy!/i)
        .should('exist')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()
      cy.wait(22000)
      // redireciona para página de success
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
      // mostrar texto de sucesso
      cy.findByText(/your purchase was successful!/i)
        .should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`)
      cy.signIn(user.email, user.password)
      cy.wait(16000)
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/orders`)
      cy.wait(2000)

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
  describe.skip('Paid games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      // criar um usuário
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.wait(5000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.wait(15000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)
      cy.wait(2000)

      // filtrar por jogos free
      cy.findByText(/highest to lowest/i).click()
      cy.wait(3000)

      cy.location('href').should('contain', 'sort=price%3Adesc')
      cy.wait(3000)

      // adicionar o jogo no carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()


      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })
      cy.wait(22000)

      // O botão de comprar deve estar desabilitado
      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      // Preencher com cartão de crédito
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '103')
      cy.wait(2000)

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()
      cy.wait(22000)

      // redireciona para página de success
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // mostrar texto de sucesso
      cy.findByText(/your purchase was successful!/i)
        .should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`)
      cy.signIn(user.email, user.password)
      cy.wait(16000)
      cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/orders`)
      cy.wait(2000)

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
