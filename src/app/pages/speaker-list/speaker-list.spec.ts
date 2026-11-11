import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { of } from 'rxjs';

import type { Session, Speaker } from '../../interfaces/conference.interfaces';
import { ConferenceService } from '../../providers/conference.service';

import { SpeakerListPage } from './speaker-list';

const speakers = [
  { id: '1', name: 'Burt Bear', title: 'Software Engineer', profilePic: 'burt.jpg', sessions: [] },
  {
    id: '2',
    name: 'Rachel Rabbit',
    title: 'Senior Software Engineer',
    profilePic: 'rachel.jpg',
    sessions: [{ id: '3', name: 'Ionic Tooling' } as Session],
  },
] as unknown as Speaker[];

describe('SpeakerListPage', () => {
  let fixture: ComponentFixture<SpeakerListPage>;
  let app: SpeakerListPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideZonelessChangeDetection(),
        provideIonicAngular({ useSetInputAPI: true }),
        provideRouter([]),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: ConferenceService, useValue: { getSpeakers: () => of(speakers) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerListPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the speaker list page', () => {
    expect(app).toBeTruthy();
  });

  it('should load the speakers when the page is shown', async () => {
    expect(app.speakers()).toEqual([]);

    app.ionViewDidEnter();
    await fixture.whenStable();

    expect(app.speakers()).toBe(speakers);
    const element: HTMLElement = fixture.nativeElement;
    expect([...element.querySelectorAll('h2')].map((name) => name.textContent)).toEqual(['Burt Bear', 'Rachel Rabbit']);
    expect(element.querySelector('img')?.getAttribute('alt')).toBe('Burt Bear profile picture');
  });

  it('should link each speaker card to the speaker detail and their sessions', async () => {
    app.ionViewDidEnter();
    await fixture.whenStable();

    const card = fixture.debugElement.queryAll(By.css('ion-card'))[1];
    const links = card
      .queryAll(By.directive(RouterLink))
      .map((item) => [
        item.query(By.css('h2, h3')).nativeElement.textContent,
        item.injector.get(RouterLink).urlTree?.toString(),
      ]);

    expect(links).toEqual([
      ['Rachel Rabbit', '/app/tabs/speakers/speaker-details/2'],
      ['Ionic Tooling', '/app/tabs/speakers/session/3'],
      ['About Rachel Rabbit', '/app/tabs/speakers/speaker-details/2'],
    ]);
  });
});
