import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('TC002 — Add item to cart', async ({ page }) => {
  const traceDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(traceDir, { recursive: true });
  await page.context().tracing.start({ screenshots: true, snapshots: true });

  try {
    // Login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Ensure inventory loaded
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Add first item to cart
    const firstAdd = page.locator('.inventory_item button').first();
    await firstAdd.click();

    // Assert cart badge shows 1
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Open cart and assert item present
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await expect(page.locator('.cart_item .inventory_item_name').first()).toBeVisible();
  } finally {
    await page.context().tracing.stop({ path: path.join(traceDir, 'tc002-add-to-cart-trace.zip') });
  }
});
