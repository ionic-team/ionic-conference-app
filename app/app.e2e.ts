describe('ConferenceApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Ionic');
  });
});
