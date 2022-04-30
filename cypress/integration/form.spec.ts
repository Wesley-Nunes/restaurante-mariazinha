describe('The form behavior', () => {
  it('should fill in all form fields with correct information', () => {
    const reservaPage = 'https://restaurante-mariazinha.vercel.app/reserva'

    cy.visit(reservaPage)

    cy.get('#firstName').type('Wes').should('have.value', 'Wes')
    cy.get('#amount').type('2').should('have.value', '2')
    cy.get('#date').type('2022-05-02').should('have.value', '2022-05-02')
    cy.get('#time').type('12:00').should('have.value', '12:00')
    cy.get('#tel').type('86999887766').should('have.value', '86999887766')
  })

  it('should show a modal with a success message', () => {
    cy.contains('Faça Sua Reserva').click()
    const firstNameMsg = 'Olá, Wes'
    cy.contains(firstNameMsg).should('be.visible')
    const amountMsg = 'Sua reserva para: 2 pessoa(s)'
    cy.contains(amountMsg).should('be.visible')
    const dateTimeMsg = 'Para o dia 2022-05-02 as 12:00.'
    cy.contains(dateTimeMsg).should('be.visible')
  })

  it('should return to the menu page when the modal is closed', () => {
    cy.contains('Fechar').click()

    cy.url().should('include', 'menu')
  })
})
