import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  options,
  search,
  shareSocial,
} from 'ionicons/icons';

import { LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertController,
  Config,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonRouterOutlet,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular/standalone';
import { Group, Session } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';
import { UserService } from '../../providers/user.service';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html',
    styleUrls: ['./schedule.scss'],
    imports: [
        IonHeader,
        IonToolbar,
        IonButtons,
        IonSegment,
        IonSegmentButton,
        IonContent,
        IonTitle,
        IonSearchbar,
        IonButton,
        IonIcon,
        IonList,
        IonListHeader,
        IonFab,
        IonFabButton,
        IonFabList,
        FormsModule,
        IonItemSliding,
        LowerCasePipe,
        RouterLink,
        IonItemGroup,
        IonItemDivider,
        IonItemOption,
        IonItemOptions,
        IonLabel,
        IonMenuButton,
    ],
    providers: [
        ModalController,
        AlertController,
        LoadingController,
        ToastController,
        Config,
    ]
})
export class SchedulePage implements OnInit {
  alertCtrl = inject(AlertController);
  confService = inject(ConferenceService);
  loadingCtrl = inject(LoadingController);
  modalCtrl = inject(ModalController);
  router = inject(Router);
  routerOutlet = inject(IonRouterOutlet);
  toastCtrl = inject(ToastController);
  user = inject(UserService);
  config = inject(Config);

  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTrackNames: string[] = [];
  shownSessions: number;
  groups: Group[] = [];
  confDate: string;
  showSearchbar: boolean;

  constructor() {
    addIcons({
      search,
      options,
      shareSocial,
      logoVimeo,
      logoInstagram,
      logoTwitter,
      logoFacebook,
    });
  }

  ngOnInit() {
    this.updateSchedule();
    this.ios = this.config.get('mode') === 'ios';
  }

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confService
      .getTimeline(
        this.dayIndex,
        this.queryText,
        this.excludeTrackNames,
        this.segment
      )
      .subscribe(data => {
        this.shownSessions = data.shownSessions;
        this.groups = data.groups;
      });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTrackNames },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTrackNames = data;
      this.updateSchedule();
    }
  }

  async addFavorite(slidingItem: IonItemSliding, sessionData: Session) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
          },
        ],
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }
  }

  async removeFavorite(
    slidingItem: IonItemSliding,
    sessionData: Session,
    title: string
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
      ],
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: IonFab) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
