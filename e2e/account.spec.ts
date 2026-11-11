import type { Locator, Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { login, openMenu, visibleTitle } from './helpers';

const expectLoggedIn = async (menu: Locator) => {
  await expect(menu.getByRole('link', { name: 'Account' })).toBeVisible();
  await expect(menu.getByRole('button', { name: 'Logout' })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Login' })).toHaveCount(0);
  await expect(menu.getByRole('link', { name: 'Signup' })).toHaveCount(0);
};

const expectLoggedOut = async (menu: Locator) => {
  await expect(menu.getByRole('link', { name: 'Login' })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Signup' })).toBeVisible();
  await expect(menu.getByRole('link', { name: 'Account' })).toHaveCount(0);
  await expect(menu.getByRole('button', { name: 'Logout' })).toHaveCount(0);
};

// Opens the Account page from the menu, opening the menu first unless it's already open.
const openAccount = async (page: Page, menu?: Locator) => {
  menu ??= await openMenu(page);
  await menu.getByRole('link', { name: 'Account' }).click();
  await expect(page).toHaveURL(/\/account$/);
  await expect(visibleTitle(page)).toHaveText('Account');
};

const accountUsername = (page: Page) => page.locator('page-account h2');

test.describe('Account', () => {
  test('logging in marks the user as logged in', async ({ page }) => {
    await page.goto('/app/tabs/schedule');
    await expectLoggedOut(await openMenu(page));
    await page.getByRole('navigation', { name: 'menu' }).getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(visibleTitle(page)).toHaveText('Login');

    await page.getByRole('textbox', { name: 'Username' }).fill('ionitron');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expectLoggedIn(await openMenu(page));
  });

  test('logging in requires a username and a password', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);

    await page.getByRole('textbox', { name: 'Username' }).fill('ionitron');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/\/login$/);

    await expectLoggedOut(await openMenu(page));
  });

  test('the Account page shows the username and can change it', async ({ page }) => {
    await login(page, 'ionitron');
    await openAccount(page);
    await expect(accountUsername(page)).toHaveText('ionitron');

    await page.getByText('Change Username').click();
    const alert = page.locator('ion-alert');
    await expect(alert.getByRole('textbox')).toHaveValue('ionitron');
    await alert.getByRole('textbox').fill('ionic-fan');
    await alert.getByRole('button', { name: 'Ok' }).click();

    await expect(accountUsername(page)).toHaveText('ionic-fan');

    await page.reload();
    await expect(accountUsername(page)).toHaveText('ionic-fan');
  });

  test('cancelling the username change keeps the username', async ({ page }) => {
    await login(page, 'ionitron');
    await openAccount(page);

    await page.getByText('Change Username').click();
    const alert = page.locator('ion-alert');
    await alert.getByRole('textbox').fill('ionic-fan');
    await alert.getByRole('button', { name: 'Cancel' }).click();
    await expect(alert).toHaveCount(0);

    await expect(accountUsername(page)).toHaveText('ionitron');
  });

  test('logging out from the menu returns to the logged-out state', async ({ page }) => {
    await login(page, 'ionitron');
    const menu = await openMenu(page);
    await expectLoggedIn(menu);

    await menu.getByRole('button', { name: 'Logout' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expectLoggedOut(await openMenu(page));

    await page.reload();
    await expectLoggedOut(await openMenu(page));
  });

  test('logging out from the Account page opens the login page', async ({ page }) => {
    await login(page, 'ionitron');
    await openAccount(page);

    await page.locator('page-account').getByText('Logout').click();

    await expect(page).toHaveURL(/\/login$/);
    await expect(visibleTitle(page)).toHaveText('Login');
    await expectLoggedOut(await openMenu(page));
  });

  test('signing up logs the user in', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('button', { name: 'Signup' }).click();
    await expect(page).toHaveURL(/\/signup$/);
    await expect(visibleTitle(page)).toHaveText('Signup');

    await page.getByRole('textbox', { name: 'Username' }).fill('newbie');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret');
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    const menu = await openMenu(page);
    await expectLoggedIn(menu);
    await openAccount(page, menu);
    await expect(accountUsername(page)).toHaveText('newbie');
  });

  test('signing up requires a username and a password', async ({ page }) => {
    await page.goto('/signup');

    await page.getByRole('textbox', { name: 'Username' }).fill('newbie');
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page).toHaveURL(/\/signup$/);
    await expectLoggedOut(await openMenu(page));
  });

  test('the logged-in state survives a reload', async ({ page }) => {
    await login(page, 'ionitron');
    await expectLoggedIn(await openMenu(page));

    await page.reload();

    const menu = await openMenu(page);
    await expectLoggedIn(menu);
    await openAccount(page, menu);
    await expect(accountUsername(page)).toHaveText('ionitron');
  });
});
