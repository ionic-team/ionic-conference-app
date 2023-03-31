describe('Map Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to the map tab', () => {
    cy.get('ion-tab-button').contains('Map').click();
    cy.contains('Map');
  });
})
