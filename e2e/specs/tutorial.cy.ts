describe('Tutorial Page', () => {
  beforeEach(() => {
    cy.enableTutorial();
  });

  it('visits the tutorial page', () => {
    cy.contains('Welcome to ICA');
  })

  it('navigates to the schedule via the skip button', () => {
    cy.get('ion-button').contains('Skip').click();
    cy.contains('Schedule');
  });
})
