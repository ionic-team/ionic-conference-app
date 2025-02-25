import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { TabsPage } from './tabs-page';

describe('TabsPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the tabs page', () => {
    const fixture = TestBed.createComponent(TabsPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
