import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
});


test.describe('Counter', () => {
    test('increment a counter on clicking a button', async ({page}) => {
        const counter = page.getByText('Counter')
        const incrementButton = page.getByRole('button');

        await expect(counter).toHaveText('Counter: 0');
        await incrementButton.click()
        await expect(counter).toHaveText('Counter: 1')
    });
});