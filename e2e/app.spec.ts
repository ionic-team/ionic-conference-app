import { expect, test } from '@playwright/test';

test('shows the tutorial on the first visit', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL(/\/tutorial$/);
  await expect(page.getByRole('button', { name: 'Skip' })).toBeVisible();
});

test('skipping the tutorial opens the schedule', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Skip' }).click();

  await expect(page).toHaveURL(/\/schedule$/);
  await expect(page.locator('ion-segment-button', { hasText: 'Favorites' }).first()).toBeVisible();
});
