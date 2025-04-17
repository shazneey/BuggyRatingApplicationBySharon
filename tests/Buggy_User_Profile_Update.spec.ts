import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: './env/.env.local' });

test('Profile update flow', async ({ page }) => {
  const buggyUrl = process.env.BASE_URL!;
  const username = process.env.USERNAME!;
  const password = process.env.PASSWORD!;

  await page.goto(buggyUrl);

  // Log in
  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill(username);
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

   //Verify page title after login
   await expect(page).toHaveTitle('Buggy Cars Rating');

  // Profile update
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('combobox', { name: 'Gender' }).fill('Male');
  await page.getByRole('textbox', { name: 'Age' }).fill('25');
  await page.getByRole('textbox', { name: 'Address' }).fill('Test Street 29, Pretoria, 0157');
  await page.getByRole('textbox', { name: 'Phone' }).fill('+2778869246');
  await page.getByLabel('Hobby').selectOption('Learning');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Shaz');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Test');

  await page.getByRole('button', { name: 'Save' }).click();

  // Assert success message
  const successMessage = page.locator("//div[@class='result alert alert-success hidden-md-down']");
  await expect(successMessage).toHaveText('The profile has been saved successful');

  // Logout
  await page.getByRole('link', { name: 'Logout' }).click();
});
