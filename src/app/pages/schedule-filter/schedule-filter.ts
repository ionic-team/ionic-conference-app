import { LowerCasePipe } from '@angular/common';
import { Component, inject, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Config,
  IonButton,
  IonButtons,
  IonRadio,
  IonRadioGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonListHeader,
  IonTitle,
  IonToolbar,
  ModalController,
  NavParams,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  call,
  cog,
  colorPalette,
  compass,
  construct,
  document,
  hammer,
  logoAngular,
  logoIonic,
  restaurant,
} from 'ionicons/icons';
import { ConferenceService } from '../../providers/conference.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'page-schedule-filter',
    templateUrl: 'schedule-filter.html',
    styleUrls: ['./schedule-filter.scss'],
    imports: [
        IonHeader,
        IonToolbar,
        IonButtons,
        IonButton,
        IonTitle,
        IonContent,
        IonList,
        IonListHeader,
        IonRadio,
        IonRadioGroup,
        IonItem,
        FormsModule,
        LowerCasePipe,
        IonIcon,
        ReactiveFormsModule
    ],
    providers: [ModalController]
})
export class ScheduleFilterPage implements OnInit {
  private config = inject(Config);
  private modalCtrl = inject(ModalController);
  private navParams = inject(NavParams);
  private confService = inject(ConferenceService);
  private fb: FormBuilder;

  ios: boolean;

  tracks: { name: string; icon: string; isChecked: boolean }[] = [];
  scheduleFilterForm: FormGroup;

  constructor(fb: FormBuilder) {
    addIcons({
      logoAngular,
      document,
      restaurant,
      logoIonic,
      hammer,
      colorPalette,
      cog,
      construct,
      call,
      compass,
    });
    this.fb = fb;
  }

  ngOnInit() {
    this.scheduleFilterForm = this.fb.group({
      selectedTrack: ['', [Validators.required, this.trackValidator]],
      selectedLocation: ['', [Validators.required, this.locationValidator]]
    });
  }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === 'ios';

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks');

    this.confService.getTracks().subscribe(tracks => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: excludedTrackNames.indexOf(track.name) === -1,
        });
      });
    });
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracks.forEach(track => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks
      .filter(c => !c.isChecked)
      .map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: string[]) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

  trackValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === 'Angular' ? { invalidTrack: true } : null;
  }

  locationValidator(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value === 'executive-ballroom' ? { invalidOption: true } : null;
  }
}
