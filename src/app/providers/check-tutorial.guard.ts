import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { from, map, tap } from 'rxjs';

export const checkTutorialGuard = () => {
  const router = inject(Router);

  return from(Preferences.get({ key: 'ion_did_tutorial' })).pipe(
    map(({ value }) => value === 'true'),
    tap(didTutorial => {
      if (didTutorial) {
        router.navigate(['/app', 'tabs', 'schedule']);
      }
    }),
    map(didTutorial => !didTutorial)
  );
};
