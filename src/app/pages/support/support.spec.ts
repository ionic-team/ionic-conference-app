import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { NgForm } from '@angular/forms';
import { ToastController, provideIonicAngular } from '@ionic/angular';

import { SupportPage } from './support';

describe('SupportPage', () => {
  let app: SupportPage;
  let toast: { present: ReturnType<typeof vi.fn> };
  let toastCtrl: { create: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    toast = { present: vi.fn().mockResolvedValue(undefined) };
    toastCtrl = { create: vi.fn().mockResolvedValue(toast) };

    await TestBed.configureTestingModule({
      imports: [SupportPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideZonelessChangeDetection(), provideIonicAngular({ useSetInputAPI: true })],
    })
      // The page provides its own ToastController, so replace it there.
      .overrideComponent(SupportPage, { set: { providers: [{ provide: ToastController, useValue: toastCtrl }] } })
      .compileComponents();

    const fixture = TestBed.createComponent(SupportPage);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should explain that requests are not actually sent', async () => {
    await app.ionViewDidEnter();

    expect(toastCtrl.create).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'This does not actually send a support request.' }),
    );
    expect(toast.present).toHaveBeenCalled();
  });

  it('should clear the message and confirm it was sent', async () => {
    app.supportMessage = 'Help!';

    await app.submit({ valid: true } as NgForm);

    expect(app.supportMessage).toBe('');
    expect(app.submitted).toBe(false);
    expect(toastCtrl.create).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Your support request has been sent.' }),
    );
    expect(toast.present).toHaveBeenCalled();
  });

  it('should keep the form when it is invalid', async () => {
    await app.submit({ valid: false } as NgForm);

    expect(app.submitted).toBe(true);
    expect(toastCtrl.create).not.toHaveBeenCalled();
  });
});
