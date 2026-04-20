export class YourSettingsPage 
{
    constructor (page)
    {
       this.page = page;
       this.pictureInput = page.getByRole('textbox', { name: 'URL of profile picture' });
       this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
       this.bioInput = page.getByRole('textbox', { name: 'Short bio about you' });
       this.passwordInput = page.getByRole('textbox', { name: 'Password' });
       this.updateSettingsButton = page.getByRole('button', { name: 'Update Settings' });
       this.bannerButton = page.getByRole('banner').getByRole('link', { name: 'conduit' });
      
    }

    async updateMySettings (person) {

        const {picture, bio, username, password} = person

        await this.pictureInput.focus();
        await this.pictureInput.press('End');
        await this.pictureInput.fill('');
        await this.pictureInput.fill(picture);
        await this.nameInput.click();
        await this.nameInput.fill(username);
        await this.bioInput.click();
        await this.bioInput.fill(bio);
        await this.passwordInput.click();
        await this.passwordInput.fill('12345678');
        await this.updateSettingsButton.click()
    }

    async gotoMain () {
        await this.bannerButton.click()
    }
}
