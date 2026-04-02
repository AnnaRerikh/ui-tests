import { test, expect } from '@playwright/test';

test('should create todos and verify text', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/vue/dist/#/');

  const input = page.getByRole('textbox', { name: 'What needs to be done?' });

  const todos = [
    'Сделать что-то',
    'Сделать еще что-то',
    'Проверить, что сделано что-то'
  ];

  for (const todo of todos) {
    await input.fill(todo);
    await input.press('Enter');
  }

  const todoItems = page.locator('.todo-list li');


  await expect(todoItems).toHaveCount(3);

  
  for (let i = 0; i < todos.length; i++) {
    await expect(todoItems.nth(i)).toContainText(todos[i]);
  }
});