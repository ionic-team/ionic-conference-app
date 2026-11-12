import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { iconButton, openSchedule, sessionItem, shownSessions, swipeOpen, visibleTitle } from './helpers';

const angularSessions = ["What's New in Angular", 'Bulding with Ionic and Angular'];

const noSessionsFound = (page: Page) => page.getByText('No Sessions Found');

const openFilter = async (page: Page) => {
  await iconButton(page, 'options').click();
  // The dialog role sits in the modal's shadow root, so search the modal element itself.
  const modal = page.locator('ion-modal');
  await expect(modal.getByText('Filter Sessions')).toBeVisible();
  return modal;
};

const applyFilter = async (page: Page) => {
  await page.locator('ion-modal').getByRole('button', { name: 'Done' }).click();
  await expect(page.locator('ion-modal')).toHaveCount(0);
};

// The share button and the social share buttons only hold an icon and have no accessible name,
// so find them by icon.
const fabButton = (page: Page, icon: string) =>
  page.locator('ion-fab-button').filter({ visible: true, has: page.locator(`ion-icon[name="${icon}"]`) });

const showFavorites = async (page: Page) => {
  // ion-segment-button covers its inner tab button, so click the segment button itself.
  await page.locator('ion-segment-button', { hasText: 'Favorites' }).click();
  await expect(page.getByRole('tab', { name: 'Favorites' })).toHaveAttribute('aria-selected', 'true');
};

test.describe('Schedule', () => {
  test.beforeEach(async ({ page }) => {
    await openSchedule(page);
  });

  test('lists the sessions grouped by time', async ({ page }) => {
    await expect(visibleTitle(page)).toHaveText('Schedule');
    await expect(shownSessions(page)).toHaveCount(20);

    const group = page.getByRole('group').filter({ hasText: '9:15 am' });
    // Sessions in a time slot are listed by start time.
    await expect(group.getByRole('heading', { level: 3 })).toHaveText([
      'University of Ionic',
      'Getting Started with Ionic',
      'Ionic Tooling',
    ]);
    await expect(sessionItem(page, 'Getting Started with Ionic')).toContainText('9:30 am — 9:45 am: Hall 2');
    await expect(noSessionsFound(page)).toBeHidden();
  });

  test('the share button opens the social share buttons', async ({ page }) => {
    const networks = ['logo-vimeo', 'logo-instagram', 'logo-twitter', 'logo-facebook'];
    await fabButton(page, 'share-social').click();
    for (const icon of networks) {
      await expect(fabButton(page, icon)).toBeVisible();
    }

    await fabButton(page, 'logo-vimeo').click();

    // Choosing a network closes the share buttons while it posts.
    await expect(page.getByText('Posting to Vimeo')).toBeVisible();
    for (const icon of networks) {
      await expect(fabButton(page, icon)).toHaveCount(0);
    }
  });

  test('search filters the sessions by name and clearing it restores the list', async ({ page }) => {
    await iconButton(page, 'search').click();
    const search = page.getByRole('searchbox');

    await search.fill('angular');
    await expect(shownSessions(page)).toHaveText(angularSessions);

    // Each word is matched on its own, so a session matching any word is shown.
    await search.fill('lunch, breakfast');
    await expect(shownSessions(page)).toHaveText(['Breakfast', 'Lunch']);

    await search.fill('');
    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('search shows an empty state when no session matches', async ({ page }) => {
    await iconButton(page, 'search').click();
    await page.getByRole('searchbox').fill('xyzzy');

    await expect(shownSessions(page)).toHaveCount(0);
    await expect(noSessionsFound(page)).toBeVisible();

    await page.getByRole('searchbox').fill('');
    await expect(shownSessions(page)).toHaveCount(20);
    await expect(noSessionsFound(page)).toBeHidden();
  });

  test('the Favorites segment shows an empty state when there are no favorites', async ({ page }) => {
    await showFavorites(page);

    await expect(shownSessions(page)).toHaveCount(0);
    await expect(noSessionsFound(page)).toBeVisible();

    await page.locator('ion-segment-button', { hasText: 'All' }).click();
    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('the Favorites segment shows only favorited sessions', async ({ page }) => {
    for (const name of ['Ionic Tooling', 'Lunch']) {
      const item = sessionItem(page, name);
      await swipeOpen(page, item);
      await item.getByRole('button', { name: 'Favorite' }).click();
      await expect(page.getByText(`${name} was successfully added as a favorite.`)).toBeVisible();
    }

    await showFavorites(page);

    await expect(shownSessions(page)).toHaveText(['Ionic Tooling', 'Lunch']);
    await expect(noSessionsFound(page)).toBeHidden();
  });

  test('removing a favorite from the Favorites segment hides it', async ({ page }) => {
    const item = sessionItem(page, 'Ionic Tooling');
    await swipeOpen(page, item);
    await item.getByRole('button', { name: 'Favorite' }).click();
    await showFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Ionic Tooling']);

    await swipeOpen(page, item);
    await item.getByRole('button', { name: 'Remove' }).click();
    const alert = page.getByRole('alertdialog', { name: 'Remove Favorite' });
    await alert.getByRole('button', { name: 'Remove' }).click();

    await expect(shownSessions(page)).toHaveCount(0);
    await expect(noSessionsFound(page)).toBeVisible();
  });

  test('favoriting a session that is already a favorite offers to remove it', async ({ page }) => {
    const item = sessionItem(page, 'Lunch');
    await swipeOpen(page, item);
    await item.getByRole('button', { name: 'Favorite' }).click();
    await expect(page.getByText('Lunch was successfully added as a favorite.')).toBeVisible();

    await swipeOpen(page, item);
    await item.getByRole('button', { name: 'Favorite' }).click();
    const alert = page.getByRole('alertdialog', { name: 'Favorite already added' });
    await alert.getByRole('button', { name: 'Cancel' }).click();
    await expect(alert).toBeHidden();

    // Cancel keeps the favorite.
    await showFavorites(page);
    await expect(shownSessions(page)).toHaveText(['Lunch']);
  });

  test('the filter can exclude a track and include it again', async ({ page }) => {
    let modal = await openFilter(page);
    await modal.getByRole('checkbox', { name: 'Angular' }).click();
    await expect(modal.getByRole('checkbox', { name: 'Angular' })).not.toBeChecked();
    await applyFilter(page);

    await expect(shownSessions(page)).toHaveCount(18);
    for (const name of angularSessions) {
      await expect(sessionItem(page, name)).toHaveCount(0);
    }
    await expect(sessionItem(page, 'Ionic Tooling')).toBeVisible();

    // The filter remembers the excluded track.
    modal = await openFilter(page);
    await expect(modal.getByRole('checkbox', { name: 'Angular' })).not.toBeChecked();
    await expect(modal.getByRole('checkbox', { name: 'Tooling' })).toBeChecked();
    await modal.getByRole('checkbox', { name: 'Angular' }).click();
    await applyFilter(page);

    await expect(shownSessions(page)).toHaveCount(20);
    for (const name of angularSessions) {
      await expect(sessionItem(page, name)).toBeVisible();
    }
  });

  test('Deselect All hides every session and Select All brings them back', async ({ page }) => {
    let modal = await openFilter(page);
    // The filter's toolbar buttons keep their own casing, not Android's uppercase
    await expect(modal.getByRole('button', { name: 'Deselect All' })).toHaveCSS('text-transform', 'capitalize');
    await modal.getByRole('button', { name: 'Deselect All' }).click();
    await expect(modal.getByRole('checkbox', { checked: true })).toHaveCount(0);
    await applyFilter(page);

    await expect(shownSessions(page)).toHaveCount(0);
    await expect(noSessionsFound(page)).toBeVisible();

    modal = await openFilter(page);
    await modal.getByRole('button', { name: 'Select All', exact: true }).click();
    await expect(modal.getByRole('checkbox', { checked: false })).toHaveCount(0);
    await applyFilter(page);

    await expect(shownSessions(page)).toHaveCount(20);
  });

  test('search and the track filter combine', async ({ page }) => {
    const modal = await openFilter(page);
    await modal.getByRole('checkbox', { name: 'Angular' }).click();
    await applyFilter(page);

    await iconButton(page, 'search').click();
    await page.getByRole('searchbox').fill('ionic');

    await expect(shownSessions(page)).not.toHaveCount(0);
    await expect(sessionItem(page, 'Bulding with Ionic and Angular')).toHaveCount(0);
    await expect(sessionItem(page, 'Getting Started with Ionic')).toBeVisible();
    await expect(sessionItem(page, 'Breakfast')).toHaveCount(0);
  });
});
