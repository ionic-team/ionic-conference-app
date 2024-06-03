// TODO(ROU-10791): enable tutorial tests after fixing the flakiness
describe.skip('Tutorial Page', () => {
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
