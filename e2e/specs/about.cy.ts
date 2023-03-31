describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to the about tab', () => {
    cy.get('ion-tab-button').contains('About').click();
    cy.contains('About');
  });
})
