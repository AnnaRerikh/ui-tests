import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


const URL = 'https://realworld.qa.guru/';
let password = faker.internet.password();
let email = faker.internet.email();
let username = faker.person.fullName ({ lastName: 'Turka' });

async function gotoURL (page) {
  await page.goto(URL);
  return page;
}

function enterEmail(email){
  let email = faker.internet.email();
  return email;
}

test('Пользователь может зарегестрироваться, используя email и пароль', async ({ page }) => {
  await gotoURL(page);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).click();

  await page.getByRole('textbox', { name: 'Email' }).fill(email);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole ('main')).toContainText('Your Feed');
  await expect(page.getByRole('navigation')).toContainText(username);
});


test('Пользователь не может повторно зарегестрироваться, используя существующий email и пароль', async ({ page }) => {
  await page.goto(URL);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Rerikh');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('rerikh124@getnada.con');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole ('main')).toContainText('Your Feed');
  await expect(page.getByRole('navigation')).toContainText('rerikh124@getnada.con');
});