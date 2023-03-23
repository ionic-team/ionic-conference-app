describe('Schedule Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to the schedule', () => {
    cy.contains('Schedule');
  });

  it('has a menu', () => {
    cy.get('ion-menu');
  });
})
