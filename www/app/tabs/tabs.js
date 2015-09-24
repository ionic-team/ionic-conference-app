import {App, IonicView, NavController} from 'ionic/ionic';

//
// Tab 1
//
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 1</h2>
    </ion-content>
    `
})
class Tab1 {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}

//
// Tab 2
//
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 2</h2>
    </ion-content>
    `
})
class Tab2 {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}

//
// Tab 3
//
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Stopwatch</ion-title>
    </ion-navbar>
    <ion-content class="padding">
      <h2>Tab 3</h2>
    </ion-content>
    `
})
class Tab3 {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}

@IonicView({
  templateUrl: 'app/tabs/tabs.html'
})
export class TabsPage {
  constructor(nav: NavController) {
    this.root1 = Tab1;
    this.root2 = Tab2;
    this.root3 = Tab3;
  }
}
