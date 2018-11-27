import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenu() {
    return element(by.css('app-root ion-menu'));
  }

  getFirstSlide() {
    return element(by.css('app-root ion-slides ion-slide:first-child')).getTagName();
  }

  getRouter() {
    return element(by.css('app-root ion-router-outlet'));
  }
}
