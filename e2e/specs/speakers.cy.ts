describe('Speakers Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to the speakers tab', () => {
    cy.get('ion-tab-button').contains('Speakers').click();
    cy.contains('Speakers');
  });
})
