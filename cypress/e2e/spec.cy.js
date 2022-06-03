describe('spec.cy.js', () => {
  it('should visit crypto app homepage', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('spec.cy.js', () => {
  it('should visit bitcoin page', () => {
    cy.visit('http://localhost:3000/coins/bitcoin')
  })
})

