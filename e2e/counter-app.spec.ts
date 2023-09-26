import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
});


test.describe('Counter', () => {
    test('increment a counter on clicking a button', async ({page}) => {
        const counter = page.getByText('Counter: ')
        const incrementButton = page.getByRole('button');

        await expect(counter).toHaveText('Counter: 0');
        await incrementButton.click()
        await expect(counter).toHaveText('Counter: 1')
    });

    test('it should look the same as last time', async ({page}) => {
        await expect(page).toHaveScreenshot();
    })

    test('it should be accessible', async({page}) => {
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

        expect(accessibilityScanResults.violations).toEqual([]); // 5
    });
});