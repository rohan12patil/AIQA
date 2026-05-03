import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('TC001 — Login (happy path)', async ({ page }) => {
  const traceDir = path.join(process.cwd(), 'test-results');
  fs.mkdirSync(traceDir, { recursive: true });
  await page.context().tracing.start({ screenshots: true, snapshots: true });

  try {
    // Navigate and perform login
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Assert successful navigation to inventory
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  } finally {
    await page.context().tracing.stop({ path: path.join(traceDir, 'tc001-login-trace.zip') });
  }
});
