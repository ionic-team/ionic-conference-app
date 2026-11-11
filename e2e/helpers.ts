import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

// Ionic keeps the pages it has shown in the DOM (hidden), so only look at visible elements.
export const visibleTitle = (page: Page): Locator => page.locator('ion-title').filter({ visible: true }).first();

// A button shown on the current page, found by its accessible name. Ionic keeps the pages it
// has shown in the DOM (hidden), so only look at visible buttons.
export const visibleButton = (page: Page, name: string): Locator =>
  page.getByRole('button', { name, exact: true }).filter({ visible: true });

// A session in the schedule list, matched by its name.
export const sessionItem = (page: Page, name: string): Locator =>
  page.locator('ion-item-sliding').filter({ visible: true, has: page.getByRole('heading', { name, exact: true }) });

// The names of the sessions the schedule list shows, in order.
export const shownSessions = (page: Page): Locator =>
  page.locator('ion-item-sliding').filter({ visible: true }).getByRole('heading', { level: 3 });

export const openSchedule = async (page: Page): Promise<void> => {
  await page.goto('/app/tabs/schedule');
  await expect(shownSessions(page).first()).toBeVisible();
};

export const openMenu = async (page: Page): Promise<Locator> => {
  const menu = page.getByRole('navigation', { name: 'menu' });
  // Let the menu finish closing if a menu item was just tapped.
  await expect(menu).toBeHidden();
  // Right after a navigation the outgoing page's menu button can still be visible and then
  // disappear mid-click, so retry until the menu is open. Every menu button opens the same menu.
  await expect(async () => {
    if (!(await menu.isVisible())) {
      await page.getByRole('button', { name: 'menu' }).filter({ visible: true }).first().click({ timeout: 1000 });
    }
    await expect(menu).toBeVisible({ timeout: 1000 });
  }).toPass();
  return menu;
};

export const login = async (page: Page, username: string): Promise<void> => {
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill('secret');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
};

// Swipes a sliding list item to the left to reveal its options.
export const swipeOpen = async (page: Page, item: Locator): Promise<void> => {
  await item.scrollIntoViewIfNeeded();
  // Wait for an earlier swipe to finish closing the item.
  await expect(item).not.toHaveClass(/item-sliding-active-slide/);
  const box = await item.boundingBox();
  if (!box) {
    throw new Error('The item to swipe is not visible');
  }
  const y = box.y + box.height / 2;
  await page.mouse.move(box.x + box.width - 20, y);
  await page.mouse.down();
  await page.mouse.move(box.x + 50, y, { steps: 10 });
  await page.mouse.up();
  await expect(item).toHaveClass(/item-sliding-active-options-end/);
};

export const backButton = (page: Page): Locator =>
  page.getByRole('button', { name: 'back', exact: true }).filter({ visible: true });

// The session detail page currently shown.
export const sessionDetail = (page: Page): Locator => page.locator('page-session-detail').filter({ visible: true });
