import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('TC003 — Checkout (complete)', async ({ page }) => {
  const traceDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(traceDir, { recursive: true });
  await page.context().tracing.start({ screenshots: true, snapshots: true });

  try {
    // Login and add item
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page.locator('.inventory_list')).toBeVisible();
    await page.locator('.inventory_item button').first().click();

    // Go to cart and start checkout
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    // Fill checkout info
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '90210');
    await page.click('#continue');

    // Verify overview shows items and finish
    await expect(page.locator('.cart_list')).toBeVisible();
    await page.click('#finish');

    // Assert order complete
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  } finally {
    await page.context().tracing.stop({ path: path.join(traceDir, 'tc003-checkout-trace.zip') });
  }
});
