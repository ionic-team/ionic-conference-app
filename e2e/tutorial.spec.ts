import { expect, test } from '@playwright/test';

import { openMenu, shownSessions, visibleTitle } from './helpers';

test.describe('Tutorial', () => {
  test('shows the tutorial on the first visit', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/tutorial$/);
    await expect(page.getByRole('heading', { name: 'Welcome to ICA' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
  });

  test('skipping the tutorial opens the schedule', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Skip' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(visibleTitle(page)).toHaveText('Schedule');
    await expect(shownSessions(page).first()).toBeVisible();
  });

  test('finishing the slides with Continue opens the schedule', async ({ page }) => {
    await page.goto('/');

    for (const title of ['What is Ionic?', 'What is Ionic Appflow?', 'Ready to Play?']) {
      await page.getByRole('heading', { name: title }).scrollIntoViewIfNeeded();
      await expect(page.getByRole('heading', { name: title })).toBeInViewport();
    }
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(visibleTitle(page)).toHaveText('Schedule');
  });

  test('does not show the tutorial again after it was completed', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    // The app saves the flag after the navigation finishes, so wait for it before reloading.
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('CapacitorStorage.ion_did_tutorial')))
      .toBe('true');

    await page.goto('/');

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(visibleTitle(page)).toHaveText('Schedule');
    await expect(page.getByRole('button', { name: 'Skip' })).toBeHidden();
  });

  test('Show Tutorial in the menu opens the tutorial again', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Skip' }).click();
    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);

    const menu = await openMenu(page);
    await menu.getByRole('button', { name: 'Show Tutorial' }).click();

    await expect(page).toHaveURL(/\/tutorial$/);
    await expect(page.getByRole('heading', { name: 'Welcome to ICA' })).toBeVisible();
  });
});
