import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

import { openMenu, visibleTitle } from './helpers';

const tabPages = [
  { name: 'Speakers', url: /\/app\/tabs\/speakers$/, title: 'Speakers' },
  { name: 'Map', url: /\/app\/tabs\/map$/, title: 'Map' },
  { name: 'About', url: /\/app\/tabs\/about$/, title: 'About' },
  { name: 'Schedule', url: /\/app\/tabs\/schedule$/, title: 'Schedule' },
];

// The About page has no toolbar title, so check its heading instead.
const expectPageTitle = async (page: Page, title: string) => {
  if (title === 'About') {
    await expect(page.locator('page-about').getByRole('heading', { name: 'About', exact: true })).toBeVisible();
  } else {
    await expect(visibleTitle(page)).toHaveText(title);
  }
};

const openSupport = async (page: Page) => {
  await page.goto('/app/tabs/schedule');
  const menu = await openMenu(page);
  await menu.getByRole('link', { name: 'Support' }).click();
  await expect(page).toHaveURL(/\/support$/);
  await expect(visibleTitle(page)).toHaveText('Support');
};

const aboutLinks = [
  { name: 'Learn Ionic', url: 'https://ionicframework.com/getting-started' },
  { name: 'Documentation', url: 'https://ionicframework.com/docs/' },
  { name: 'Showcase', url: 'https://showcase.ionicframework.com/' },
  { name: 'GitHub Repo', url: 'https://github.com/ionic-team/ionic' },
];

// The About page also keeps its date picker popover in the DOM, so match the options by content.
const aboutOptions = (page: Page) => page.locator('ion-popover').filter({ hasText: 'Learn Ionic' });

const openAboutOptions = async (page: Page) => {
  // The options button only holds an icon and has no accessible name, so find it by position.
  await page.locator('page-about ion-buttons[slot="end"] ion-button').filter({ visible: true }).click();
  await expect(aboutOptions(page)).toBeVisible();
};

test.describe('Navigation', () => {
  test('the side menu opens each conference page', async ({ page }) => {
    await page.goto('/app/tabs/schedule');

    for (const tabPage of tabPages) {
      const menu = await openMenu(page);
      await menu.getByRole('link', { name: tabPage.name }).click();

      await expect(page).toHaveURL(tabPage.url);
      await expectPageTitle(page, tabPage.title);
      await expect(page.getByRole('tab', { name: tabPage.name })).toHaveAttribute('aria-selected', 'true');
    }
  });

  test('the side menu opens the Login, Signup and Support pages', async ({ page }) => {
    await page.goto('/app/tabs/schedule');

    for (const { name, url } of [
      { name: 'Login', url: /\/login$/ },
      { name: 'Signup', url: /\/signup$/ },
      { name: 'Support', url: /\/support$/ },
    ]) {
      const menu = await openMenu(page);
      await menu.getByRole('link', { name }).click();

      await expect(page).toHaveURL(url);
      await expect(visibleTitle(page)).toHaveText(name);
    }
  });

  test('the tab bar opens each tab page', async ({ page }) => {
    await page.goto('/app/tabs/schedule');

    for (const tabPage of tabPages) {
      await page.getByRole('tab', { name: tabPage.name }).click();

      await expect(page).toHaveURL(tabPage.url);
      await expectPageTitle(page, tabPage.title);
      await expect(page.getByRole('tab', { name: tabPage.name })).toHaveAttribute('aria-selected', 'true');
    }
  });

  test('the Map page shows the map with the conference locations', async ({ page }) => {
    // Keep the test off the network: the map works without its tiles and marker images.
    await page.route(/^https:\/\/(.+\.tile\.openstreetmap\.org|unpkg\.com)\//, (route) => route.abort());
    await page.goto('/app/tabs/map');

    await expect(visibleTitle(page)).toHaveText('Map');
    const map = page.locator('.map-canvas');
    await expect(map).toHaveClass(/show-map/);
    await expect(map).toHaveClass(/leaflet-container/);
    await expect(map.locator('.leaflet-marker-icon')).toHaveCount(3);

    await map.locator('.leaflet-marker-icon').first().click();
    await expect(map.locator('.location-popup .leaflet-popup-content')).toHaveText('Monona Terrace Convention Center');
  });

  test('the About page shows the conference date and location', async ({ page }) => {
    await page.goto('/app/tabs/about');

    const about = page.locator('page-about').filter({ visible: true });
    await expect(about).toContainText('a one-day event happening on May 17, 2047');
    await expect(about.locator('ion-item').filter({ hasText: 'Date' })).toContainText('May 17, 2047');
    await expect(about.getByRole('button', { name: 'Location, Madison, WI' })).toBeVisible();
    await expect(about).toContainText('ica2047');
  });

  test('the About page options open the Ionic links and the Support page', async ({ page }) => {
    // The links open in a new tab, so answer them locally to keep the test off the network.
    await page
      .context()
      .route(/^https:\/\/(\w+\.)?(ionicframework|github)\.com\//, (route) => route.fulfill({ body: '' }));
    await page.goto('/app/tabs/about');

    for (const { name, url } of aboutLinks) {
      await openAboutOptions(page);
      const popup = page.waitForEvent('popup');
      await aboutOptions(page).getByRole('button', { name, exact: true }).click();

      await expect(await popup).toHaveURL(url);
      await expect(aboutOptions(page)).toHaveCount(0);
    }

    await openAboutOptions(page);
    await aboutOptions(page).getByRole('button', { name: 'Support', exact: true }).click();

    await expect(page).toHaveURL(/\/support$/);
    await expect(visibleTitle(page)).toHaveText('Support');
    await expect(aboutOptions(page)).toHaveCount(0);
  });

  test('the dark mode toggle switches the dark palette', async ({ page }) => {
    await page.goto('/app/tabs/schedule');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/ion-palette-dark/);

    const menu = await openMenu(page);
    const toggle = menu.getByRole('switch', { name: 'Dark Mode' });
    await toggle.click();

    await expect(toggle).toBeChecked();
    await expect(html).toHaveClass(/ion-palette-dark/);

    await toggle.click();

    await expect(toggle).not.toBeChecked();
    await expect(html).not.toHaveClass(/ion-palette-dark/);
  });
});

test.describe('Support', () => {
  test('the Support page tells the user that messages are not actually sent', async ({ page }) => {
    await openSupport(page);

    await expect(page.getByText('This does not actually send a support request.')).toBeVisible();
  });

  test('the Support page shows the required message when the message is left empty', async ({ page }) => {
    await openSupport(page);
    const message = page.getByRole('textbox', { name: 'Enter your support message below' });
    await expect(page.getByText('Support message is required')).toBeHidden();

    await message.focus();
    await message.blur();

    await expect(page.getByText('Support message is required')).toBeVisible();
  });

  test('the Support page shows a confirmation and clears the form after sending', async ({ page }) => {
    await openSupport(page);
    const message = page.getByRole('textbox', { name: 'Enter your support message below' });

    await message.fill('The schedule is great!');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Your support request has been sent.')).toBeVisible();
    await expect(message).toHaveValue('');
  });

  test('the Support page asks before leaving with an unsent message', async ({ page }) => {
    await openSupport(page);
    await page.getByRole('textbox', { name: 'Enter your support message below' }).fill('Unsent message');

    let menu = await openMenu(page);
    await menu.getByRole('link', { name: 'Schedule' }).click();
    const alert = page.locator('ion-alert');
    await expect(alert).toContainText('Leave this page?');
    await alert.getByRole('button', { name: 'Stay' }).click();

    await expect(alert).toHaveCount(0);
    await expect(page).toHaveURL(/\/support$/);
    await expect(page.getByRole('textbox', { name: 'Enter your support message below' })).toHaveValue('Unsent message');

    menu = await openMenu(page);
    await menu.getByRole('link', { name: 'Schedule' }).click();
    await alert.getByRole('button', { name: 'Leave' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(visibleTitle(page)).toHaveText('Schedule');
  });

  test('the Support page leaves without asking when the message is empty', async ({ page }) => {
    await openSupport(page);

    const menu = await openMenu(page);
    await menu.getByRole('link', { name: 'Schedule' }).click();

    await expect(page).toHaveURL(/\/app\/tabs\/schedule$/);
    await expect(page.locator('ion-alert')).toHaveCount(0);
  });
});
