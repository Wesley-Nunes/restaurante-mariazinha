describe('Navigation', () => {
  it('should navigate to reserva page', () => {
    const homePage = 'https://restaurante-mariazinha.vercel.app/'

    cy.visit(homePage)

    cy.contains('Reserva').click()

    cy.url().should('include', 'reserva')
  })

  it('should navigate to sobre-nos page', () => {
    cy.contains('Sobre Nós').click()

    cy.url().should('include', 'sobre-nos')
  })

  it('should navigate to menu page(homepage)', () => {
    cy.contains('Menu').click()

    cy.url().should('include', 'menu')
  })

  it('should navigate to reserva page using the link "Faça A Sua Reserva"', () => {
    cy.contains('Faça A Sua Reserva').click()

    cy.url().should('include', 'reserva')
  })

  it('should navigate to menu page(homepage) using the logo', () => {
    cy.get('[alt="logo"]').click()

    cy.url().should('include', 'menu')
  })
})
