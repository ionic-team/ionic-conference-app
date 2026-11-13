import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { backButton, sessionDetail, visibleButton, visibleTitle } from './helpers';

const speakerNames = [
  'Burt Bear',
  'Charlie Cheetah',
  'Donald Duck',
  'Eva Eagle',
  'Ellie Elephant',
  'Gino Giraffe',
  'Isabella Iguana',
  'Karl Kitten',
  'Lionel Lion',
  'Molly Mouse',
  'Paul Puppy',
  'Rachel Rabbit',
  'Ted Turtle',
];

const speakerCard = (page: Page, name: string) =>
  page.locator('ion-card').filter({ visible: true, has: page.getByRole('heading', { level: 2, name, exact: true }) });

test.describe('Speakers', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/app/tabs/schedule');
    await page.getByRole('tab', { name: 'Speakers' }).click();
    await expect(page).toHaveURL(/\/app\/tabs\/speakers$/);
  });

  test('lists the speakers', async ({ page }) => {
    await expect(visibleTitle(page)).toHaveText('Speakers');
    await expect(page.locator('ion-card').getByRole('heading', { level: 2 })).toHaveText(speakerNames);
    await expect(speakerCard(page, 'Rachel Rabbit')).toContainText('Senior Software Engineer');
  });

  test('lists the sessions of each speaker', async ({ page }) => {
    await expect(speakerCard(page, 'Rachel Rabbit').getByRole('heading', { level: 3 })).toHaveText([
      'Ionic Tooling',
      "What's New in Angular",
      'Navigation in Ionic',
      'Mobile States',
      'About Rachel Rabbit',
    ]);
  });

  test('opening a speaker shows the speaker detail', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/speakers\/speaker-details\/1$/);
    const detail = page.locator('ion-content.speaker-detail').filter({ visible: true });
    await expect(detail.getByRole('heading', { level: 2 })).toHaveText('Burt Bear');
    await expect(detail.getByRole('img', { name: 'Burt Bear' })).toBeVisible();
    await expect(detail).toContainText('Burt is a Bear.');
    await expect(detail.locator('ion-chip')).toHaveText(['Twitter', 'GitHub', 'Instagram']);
  });

  test('the speaker detail Contact and Share buttons have accessible names', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();
    await expect(page).toHaveURL(/\/speaker-details\/1$/);

    await expect(visibleButton(page, 'Contact')).toBeVisible();
    await expect(visibleButton(page, 'Share')).toBeVisible();
  });

  test('Contact in the speaker detail opens the email and call options that Cancel closes', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();
    await expect(page).toHaveURL(/\/speaker-details\/1$/);

    await visibleButton(page, 'Contact').click();

    const sheet = page.locator('ion-action-sheet');
    await expect(sheet.getByText('Contact Burt Bear')).toBeVisible();
    for (const name of ['Email ( burt@example.com )', 'Call ( +1-541-754-3010 )', 'Cancel']) {
      await expect(sheet.getByRole('button', { name, exact: true })).toBeVisible();
    }

    await sheet.getByRole('button', { name: 'Cancel', exact: true }).click();

    await expect(sheet).toHaveCount(0);
  });

  test('the speaker detail contact options open the email and phone links', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();
    await expect(page).toHaveURL(/\/speaker-details\/1$/);
    // Record the links instead of opening them, which would leave the app.
    await page.evaluate(() => {
      const opened: string[] = [];
      (window as Window & { opened?: string[] }).opened = opened;
      window.open = (url?: string | URL) => {
        opened.push(String(url));
        return null;
      };
    });
    const sheet = page.locator('ion-action-sheet');

    for (const name of ['Email ( burt@example.com )', 'Call ( +1-541-754-3010 )']) {
      await visibleButton(page, 'Contact').click();
      await sheet.getByRole('button', { name, exact: true }).click();
      await expect(sheet).toHaveCount(0);
    }

    expect(await page.evaluate(() => (window as Window & { opened?: string[] }).opened)).toEqual([
      'mailto:burt@example.com',
      'tel:+1-541-754-3010',
    ]);
  });

  test('Share in the speaker detail opens a share sheet for the speaker that Cancel closes', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();
    await expect(page).toHaveURL(/\/speaker-details\/1$/);

    await visibleButton(page, 'Share').click();

    const sheet = page.locator('ion-action-sheet');
    await expect(sheet.getByText('Share Burt Bear')).toBeVisible();
    for (const name of ['Copy Link', 'Share via ...', 'Cancel']) {
      await expect(sheet.getByRole('button', { name, exact: true })).toBeVisible();
    }

    await sheet.getByRole('button', { name: 'Cancel', exact: true }).click();

    await expect(sheet).toHaveCount(0);
  });

  test('About in a speaker card opens the speaker detail', async ({ page }) => {
    await speakerCard(page, 'Rachel Rabbit').getByRole('link', { name: 'About Rachel Rabbit' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/speakers\/speaker-details\/12$/);
    await expect(page.locator('.speaker-background h2').filter({ visible: true })).toHaveText('Rachel Rabbit');
  });

  test('tapping a speaker session opens the session detail', async ({ page }) => {
    await speakerCard(page, 'Rachel Rabbit').getByRole('link', { name: 'Ionic Tooling' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/speakers\/session\/3$/);
    await expect(sessionDetail(page).getByRole('heading', { level: 1 })).toHaveText('Ionic Tooling');
    await expect(sessionDetail(page)).toContainText('Executive Ballroom');
  });

  test('the back button returns from the speaker detail to the list', async ({ page }) => {
    await speakerCard(page, 'Burt Bear').getByRole('heading', { level: 2 }).click();
    await expect(page).toHaveURL(/\/speaker-details\/1$/);

    await backButton(page).click();

    await expect(page).toHaveURL(/\/app\/tabs\/speakers$/);
    await expect(visibleTitle(page)).toHaveText('Speakers');
  });
});
