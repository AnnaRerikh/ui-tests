import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { RegisterPage } from '../pages/register.page';
import { YourFeedPage } from '../pages/yourfeed.page';

export async function registerUser(page) {
    const main = new MainPage(page);
    const register = new RegisterPage(page);
    const yourFeed = new YourFeedPage(page);

    const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        username: faker.person.firstName()
    };

    await main.open();
    await main.gotoRegister();   
    await register.signup(user); 

    await expect(yourFeed.getProfileName()).toContainText(user.username);

    return user;
}