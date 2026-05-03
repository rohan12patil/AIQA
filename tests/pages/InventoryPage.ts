import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productItems: Locator;
  readonly productImages: Locator;
  readonly productNames: Locator;
  readonly productDescriptions: Locator;
  readonly productPrices: Locator;
  readonly sortSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productItems = page.locator('.inventory_item');
    this.productImages = page.locator('.inventory_item .inventory_item_img img');
    this.productNames = page.locator('.inventory_item_name');
    this.productDescriptions = page.locator('.inventory_item_desc');
    this.productPrices = page.locator('.inventory_item_price');
    this.sortSelect = page.locator('[data-test="product_sort_container"]');
  }

  async getProductCount() {
    return this.productItems.count();
  }

  async getProductNames() {
    return this.productNames.allTextContents();
  }

  async sortBy(optionValue: string) {
    await this.sortSelect.selectOption(optionValue);
  }
}
