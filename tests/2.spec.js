import { test, expect } from '@playwright/test';

test('Поиск ролевых селекторов', async ({ page }) => {
  await page.goto('file:///Users/macbook/Documents/pw_project/burger-order.html');
  await page.getByRole('textbox', { name: 'Имя клиента:' }).fill('Rerikh');
  await page.getByRole('combobox', { name: 'Тип бургера:' }).selectOption('spicy');
  await page.getByRole('radio', { name: 'Большой' }).click('');
  await page.getByRole('checkbox', { name: 'Горчица' }).click('');
  await page.getByRole('button', { name: '+' }).click('');
  await page.getByRole('radio', { name: 'Картой онлайн' }).click('');
  await page.getByRole('button', { name: 'Заказать бургер' }).click('');
  await expect(page.getByRole('heading', { name: '✅ Заказ принят!' })).toBeVisible();
  await expect(page.getByRole('paragraph', { name: 'Спасибо за заказ, Rerikh!' })).toBeVisible();
});
  


test('Поиск селекторов по классу', async ({ page }) => {
  await page.goto('file:///Users/macbook/Documents/pw_project/burger-order.html');
  await page.locator('.order-form').locator('.form-group').locator('input').first().fill('Rerikh');
  await page.locator('.order-form').locator('select').first().selectOption('spicy');
  await page.locator('.radio-group').filter({hasText: 'Большой'}).click();
  await page.locator('.checkbox-group').filter({hasText: 'Горчица'}).click();
  await page.locator('.switch-label').click();
  await page.locator('.counter-increase').click();
  await page.locator('.radio-group').filter({hasText: 'Картой онлайн'}).click();
  await page.locator('.btn-primary').first().click();
  await expect(page.getByRole('paragraph', { name: 'Спасибо за заказ, Rerikh!' })).toBeVisible();
});


test('Поиск селекторов по ID', async ({ page }) => {
  await page.goto('file:///Users/macbook/Documents/pw_project/burger-order.html');
  await page.locator('#customerName').fill('Rerikh');
  await page.locator('#burgerType').selectOption('spicy');
  await page.locator('#quantity').fill('2');
  await page.locator('.btn-primary').first().click();
});


test('Поиск по атрибуту и значению', async ({ page }) => {
  await page.goto('file:///Users/macbook/Documents/pw_project/burger-order.html');
  await page.locator('[name="customerName"]').fill('Rerikh');
  await page.locator('[name="burgerType"]').selectOption('spicy');
  await page.locator('[name="portionSize"]').filter({hasText: 'Большой'}).click();
  await page.locator('[name="extraMustard"]').filter({hasText: 'Горчица'}).click();
  



  
 
  await page.locator('#quantity').fill('2');
  await page.locator('.btn-primary').first().click();
});