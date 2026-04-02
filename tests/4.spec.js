import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


const URL = 'https://realworld.qa.guru/';

let user = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    username: faker.person.fullName ({ lastName: 'Turka' })
}

async function gotoURL (page) {
  await page.goto(URL);
  return page;
}


test('Пользователь может зарегестрироваться, используя email и пароль', async ({ page }) => {
  await gotoURL(page);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(user.username);
  await page.getByRole('textbox', { name: 'Email' }).click();

  await page.getByRole('textbox', { name: 'Email' }).fill(user.email);

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole ('main')).toContainText('Your Feed');
  await expect(page.getByRole('navigation')).toContainText(user.username);
});



test('Пользователь может зарегестрироваться, используя email и пароль v2', async ({ page }) => {

// Деструктуризация объекта user простая через отдельные строчки, более понятная
/*
username = user.username;
password = user.password;
email = user.email;
*/

// Деструктуризация более сложная, но занимает меньше места в одну строчку и через константу (в ней мы перечисляем ключи объекта user)
const {email, username, password} = user;

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
