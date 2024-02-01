import {expect, test} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:3000');
});
test.describe('Counter', () => {
  test('it should be accessible', async({page}) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});