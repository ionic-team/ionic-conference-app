import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { backButton, openSchedule, sessionDetail, sessionItem, shownSessions, visibleButton } from './helpers';

const openSession = async (page: Page, name: string) => {
  await sessionItem(page, name).click();
  await expect(sessionDetail(page).getByRole('heading', { level: 1 })).toHaveText(name);
};

const goBackToFavorites = async (page: Page) => {
  await backButton(page).click();
  await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
  await page.locator('ion-segment-button', { hasText: 'Favorites' }).click();
};

test.describe('Session detail', () => {
  test.beforeEach(async ({ page }) => {
    await openSchedule(page);
  });

  test('shows the session title, track, time and location', async ({ page }) => {
    await openSession(page, 'Getting Started with Ionic');

    await expect(page).toHaveURL(/\/app\/tabs\/schedule\/session\/2$/);
    const content = sessionDetail(page);
    await expect(content.locator('.session-track-ionic')).toHaveText('Ionic');
    await expect(content).toContainText('Mobile devices and browsers are now advanced enough');
    await expect(content).toContainText('9:30 am – 9:45 am');
    await expect(content).toContainText('Hall 2');
  });

  test('opens a session from a direct link', async ({ page }) => {
    await page.goto('/app/tabs/schedule/session/7');

    const content = sessionDetail(page);
    await expect(content.getByRole('heading', { level: 1 })).toHaveText('The Evolution of Ionicons');
    await expect(content.locator('.session-track-design')).toHaveText('Design');
    await expect(content).toContainText('10:15 am – 10:30 am');

    // There is no earlier page to go back to, so the back button opens the schedule.
    await backButton(page).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('the favorite and share buttons have accessible names', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    // The schedule's Share button can still be on screen while the detail page animates in.
    const detail = sessionDetail(page);
    await expect(detail.getByRole('button', { name: 'Add favorite', exact: true })).toBeVisible();
    await expect(detail.getByRole('button', { name: 'Share', exact: true })).toBeVisible();
  });

  test('Share opens a share sheet for the session that Cancel closes', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    await sessionDetail(page).getByRole('button', { name: 'Share', exact: true }).click();

    const sheet = page.locator('ion-action-sheet');
    await expect(sheet.getByText('Share Ionic Tooling')).toBeVisible();
    for (const name of ['Copy Link', 'Share via ...', 'Cancel']) {
      await expect(sheet.getByRole('button', { name, exact: true })).toBeVisible();
    }

    await sheet.getByRole('button', { name: 'Cancel', exact: true }).click();

    await expect(sheet).toHaveCount(0);
  });

  test('the back button returns to the schedule', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    await backButton(page).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('favoriting a session from the detail page adds it to Favorites', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    await visibleButton(page, 'Add favorite').click();
    await expect(visibleButton(page, 'Remove favorite')).toBeVisible();

    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);
  });

  test('unfavoriting a session from the detail page removes it from Favorites', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');
    await visibleButton(page, 'Add favorite').click();
    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);
    await page.locator('ion-segment-button', { hasText: 'All' }).click();
    await expect(shownSessions(page)).toHaveCount(20);

    await openSession(page, 'Ionic Tooling');
    // The detail page shows the session is already a favorite.
    await visibleButton(page, 'Remove favorite').click();
    await expect(visibleButton(page, 'Add favorite')).toBeVisible();

    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveCount(0);
    await expect(page.getByText('No Sessions Found')).toBeVisible();
  });

  test('unfavoriting a session opened from Favorites removes it from the list', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');
    await visibleButton(page, 'Add favorite').click();
    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);

    await openSession(page, 'Ionic Tooling');
    await visibleButton(page, 'Remove favorite').click();
    await backButton(page).click();
    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);

    await expect(page.getByText('No Sessions Found')).toBeVisible();
    await expect(shownSessions(page)).toHaveCount(0);
  });
});
