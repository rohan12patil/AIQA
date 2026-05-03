import { test, expect } from '@playwright/test';
import { InventoryPage } from './pages/InventoryPage';
import { LoginPage } from './pages/LoginPage';

const standardUser = {
  username: 'standard_user',
  password: 'secret_sauce',
};

const expectedAzOrder = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'Test.allTheThings() T-Shirt',
];

test.describe('Sauce Demo POM - A1, B1, C1', () => {
  test('TC-A1-001 | Valid Login - Standard User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);

    await expect(page).toHaveURL(/inventory\.html$/);
    await expect(inventoryPage.productItems).toHaveCount(6);
    await loginPage.expectNoLoginError();
  });

  test('TC-B1-001 | Product Display', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);

    await expect(page).toHaveURL(/inventory\.html$/);
    await expect(inventoryPage.productItems).toHaveCount(6);
    await expect(inventoryPage.productImages).toHaveCount(6);
    await expect(inventoryPage.productNames).toHaveCount(6);
    await expect(inventoryPage.productDescriptions).toHaveCount(6);
    await expect(inventoryPage.productPrices).toHaveCount(6);
  });

  test('TC-C1-001 | Sort by Name A to Z', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);

    await expect(page).toHaveURL(/inventory\.html$/);
    await inventoryPage.sortBy('az');

    const productNames = await inventoryPage.getProductNames();
    expect(productNames).toEqual(expectedAzOrder);
  });
});
