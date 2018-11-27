import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the menu', () => {
    page.navigateTo();
    expect(page.getMenu()).toBeTruthy();
  });
  fit('should get the slides text', () => {
    page.navigateTo();
    expect(page.getFirstSlide()).toBe('ION-SLIDE');
    // console.log(page.getFirstSlide());
  });

  it('should create a router outlet', () => {
    page.navigateTo();
    expect(page.getRouter()).toBeTruthy();
  });
});
