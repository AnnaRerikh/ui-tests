import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/pages/main.page';
import { LoginPage } from '../src/pages/login.page';
import { YourFeedPage } from '../src/pages/yourfeed.page';
import { MyProfilePage } from '../src/pages/myprofile.page';
import { YourSettingsPage } from '../src/pages/yoursettings.page'

let person = {
    picture: faker.image.avatarGitHub (),
    username: faker.person.firstName ('female'),
    bio: faker.person.bio ()
}

// Редактирование профиля через авторизацию
test('Редактирование своего профиля через авторизацию', async ({ page }) => {

    const main = new MainPage(page);
    const login = new LoginPage(page);
    const yourfeed = new YourFeedPage(page);
    const myprofile = new MyProfilePage(page);
    const settingsprofile = new YourSettingsPage(page);
    
    await main.open();
    await main.gotoLogin();
    await login.signin();
    await yourfeed.gotoMyProfile();
    await myprofile.waitForProfileLoaded();
    await myprofile.gotoMyProfileSettings();
    await settingsprofile.updateMySettings(person);
    await yourfeed.gotoLogout();
    await main.open();
    await main.gotoLogin();
    await login.signin();
    await yourfeed.gotoMyProfile();

    
   await expect.poll(async () => {
   return await myprofile.getProfileName().textContent();
   }).toContain(person.username);

   await expect.poll(async () => {
   return await myprofile.getProfileBio().textContent();
   }).toContain(person.bio);

   await expect.poll(async () => {
   return await myprofile.getProfileAvatar().getAttribute('src');
   }).toBe(person.picture);

})