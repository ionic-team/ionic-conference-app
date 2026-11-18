import { CUSTOM_ELEMENTS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ToastController, provideIonicAngular } from '@ionic/angular';

import { SupportPage } from './support';

// A form with the page's required message field, filled with the given value.
const form = (message: string): NgForm => {
  const ngForm = new NgForm([], []);
  ngForm.form.addControl('supportQuestion', new FormControl(message, Validators.required));
  return ngForm;
};

describe('SupportPage', () => {
  let app: SupportPage;
  let toast: { present: ReturnType<typeof vi.fn> };
  let toastCtrl: {
    create: ReturnType<typeof vi.fn>;
    getTop: ReturnType<typeof vi.fn>;
    dismiss: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    toast = { present: vi.fn().mockResolvedValue(undefined) };
    toastCtrl = {
      create: vi.fn().mockResolvedValue(toast),
      getTop: vi.fn().mockResolvedValue(undefined),
      dismiss: vi.fn().mockResolvedValue(true),
    };

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
    const sent = form('Help!');
    sent.form.markAllAsTouched();

    await app.submit(sent);

    expect(sent.form.get('supportQuestion')?.value).toBe('');
    // The emptied field doesn't show its required message
    expect(sent.form.get('supportQuestion')?.touched).toBe(false);
    expect(app.submitted).toBe(false);
    expect(toastCtrl.create).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Your support request has been sent.' }),
    );
    expect(toast.present).toHaveBeenCalled();
    // No toast is open, so there's nothing to close
    expect(toastCtrl.dismiss).not.toHaveBeenCalled();
  });

  it('should close the open notice before confirming', async () => {
    toastCtrl.getTop.mockResolvedValue(toast);

    await app.submit(form('Help!'));

    expect(toastCtrl.dismiss).toHaveBeenCalled();
    expect(toastCtrl.dismiss.mock.invocationCallOrder[0]).toBeLessThan(toast.present.mock.invocationCallOrder[0]);
  });

  it('should keep the form when it is invalid', async () => {
    const empty = form('');

    await app.submit(empty);

    expect(app.submitted).toBe(true);
    // Touching the field shows its required message
    expect(empty.form.get('supportQuestion')?.touched).toBe(true);
    expect(toastCtrl.create).not.toHaveBeenCalled();
  });
});
