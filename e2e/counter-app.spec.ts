import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
});


test.describe('Counter', () => {
    test('increment a counter on clicking a button', async ({page}) => {
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const counter = page.getByText('Counter: ')
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementButton = page.getByRole('button');

        await expect(counter).toHaveText('Counter: 0');
        await incrementButton.click()
        await expect(counter).toHaveText('Counter: 1')
    });

    test('it should look the same as last time', async ({page}) => {
        await expect(page).toHaveScreenshot();
    })

    test('it should be accessible', async({page}) => {
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});