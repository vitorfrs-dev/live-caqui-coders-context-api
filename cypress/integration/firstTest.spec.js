describe('Sign in and Sign out', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('it should be able to sign in and sign out', () => {

    cy.get('[data-cy=signInButton]').click()
    cy.get('[data-cy=sign-in-form] input').type('homer-simpson')

    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://api.github.com/users/homer-simpson',
      response: {
        avatar_url: 'https://www.alfanerd.com.br/wp-content/uploads/2019/09/homer-simpson-comendo-2-1.jpg',
        name: 'Homer Simpson',
        login: 'homer-simpson'
      }
    }).as('githubRequest')

    cy.get('[data-cy=submit-sign-in]').click()
    cy.get('[data-cy=close-auth-aside-btn]').click()
    cy.contains('Olá, Homer Simpson').should('have.text', 'Olá, Homer Simpson')

    cy.get('[alt="user avatar"]').first().click()
    cy.get('[data-cy=sign-out-btn]').click()
    cy.get('[data-cy=close-auth-aside-btn]').click()
    cy.get('[data-cy=signInButton]').should('be.visible')

  });
});

describe('Adding products to the cart', () => {
  it('should be able to add new items to the cart', () => {
    cy.get('[data-cy=add-to-cart-btn]')
      .first()
      .click()
    
    cy.get('[data-cy=basket-counter]').should('have.text', '1');

    cy.get('[data-cy=basket-area]').click();

    cy.location('pathname').should('eq', '/shoppingcart')

    cy.get('[data-cy=cart-table-body]')
      .children()
      .should('have.length', 1)
  })
})