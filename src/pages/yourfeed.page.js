export class YourFeedPage 
{
    constructor (page)
    {
       this.page = page;
       this.profileName = page.getByRole('navigation');
       this.profileDropdown = page.locator('.nav-link.dropdown-toggle');
       this.profileLink = page.getByRole('link', { name: 'Profile' });
       this.logoutLink = page.getByRole('link', { name: 'Logout' });

    }
    getProfileName() {
        return this.profileName;
    } 

    async gotoMyProfile () {
        await  this.profileDropdown.click();
        await this.profileLink.click();
    }

    async gotoLogout () {
        await this.profileDropdown.click();
        await this.logoutLink.click();
    }

}
