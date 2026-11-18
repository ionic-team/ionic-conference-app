import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { backButton, iconButton, openSchedule, sessionDetail, sessionItem, shownSessions } from './helpers';

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

  test('the back button returns to the schedule', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    await backButton(page).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('favoriting a session from the detail page adds it to Favorites', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');

    await iconButton(page, 'star-outline').click();
    await expect(iconButton(page, 'star')).toBeVisible();

    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);
  });

  test('unfavoriting a session from the detail page removes it from Favorites', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');
    await iconButton(page, 'star-outline').click();
    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);
    await page.locator('ion-segment-button', { hasText: 'All' }).click();
    await expect(shownSessions(page)).toHaveCount(20);

    await openSession(page, 'Ionic Tooling');
    // The detail page shows the session is already a favorite.
    await iconButton(page, 'star').click();
    await expect(iconButton(page, 'star-outline')).toBeVisible();

    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveCount(0);
    await expect(page.getByText('No Sessions Found')).toBeVisible();
  });

  // Bug: the schedule only refreshes its list when the segment, search or filter changes, so
  // after unfavoriting a session opened from the Favorites list, going back still shows it.
  test.fixme('unfavoriting a session opened from Favorites removes it from the list', async ({ page }) => {
    await openSession(page, 'Ionic Tooling');
    await iconButton(page, 'star-outline').click();
    await goBackToFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);

    await openSession(page, 'Ionic Tooling');
    await iconButton(page, 'star').click();
    await backButton(page).click();
    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);

    await expect(page.getByText('No Sessions Found')).toBeVisible();
    await expect(shownSessions(page)).toHaveCount(0);
  });
});
