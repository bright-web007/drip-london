import { test, expect } from '@playwright/test';

test('basic navigation works', async ({ page }) => {
  // Go to home page
  await page.goto('/');

  // Verify we're on the home page
  await expect(page.getByRole('heading', { name: 'Home Page' })).toBeVisible();

  // Navigate to about page
  await page.getByRole('link', { name: 'About' }).click();

  // Verify we've navigated to the about page
  await expect(page.getByRole('heading', { name: 'About Page' })).toBeVisible();

  // Go back to home page
  await page.getByRole('link', { name: 'Back to Home' }).click();

  // Verify we're back on the home page
  await expect(page.getByRole('heading', { name: 'Home Page' })).toBeVisible();
});
