import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { openMenu, shownSessions, visibleTitle } from './helpers';

// Drags from the left edge of the screen, which opens the side menu when it is enabled.
const swipeFromLeftEdge = async (page: Page) => {
  await page.mouse.move(5, 300);
  await page.mouse.down();
  await page.mouse.move(250, 300, { steps: 10 });
  await page.mouse.up();
};

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

  test('the side menu is disabled on the tutorial and works again after skipping it', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Welcome to ICA' })).toBeVisible();
    const menu = page.getByRole('navigation', { name: 'menu' });

    await expect(page.locator('ion-menu')).toHaveJSProperty('disabled', true);
    await expect(page.getByRole('button', { name: 'menu' }).filter({ visible: true })).toHaveCount(0);
    await swipeFromLeftEdge(page);
    await expect(menu).toBeHidden();

    await page.getByRole('button', { name: 'Skip' }).click();
    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(page.locator('ion-menu')).toHaveJSProperty('disabled', false);

    await swipeFromLeftEdge(page);
    await expect(menu).toBeVisible();
  });
});
