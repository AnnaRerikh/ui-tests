export class MyProfilePage
{
    constructor (page)
    {
       this.page = page;
       this.editProfileLink = page.getByRole('link', { name: 'Edit Profile Settings' });
       this.userAvatar = page.locator('.user-img');
       this.userName = page.locator('.user-info h4');
       this.userBio = page.locator('.user-info p');
       
    }   

    async gotoMyProfileSettings () {
        await this.editProfileLink.click();
    }

    getProfileAvatar() {
        return this.userAvatar;
    } 

    getProfileName() {
        return this.userName; 
    } 

     getProfileBio() {
        return this.userBio; 
    } 

    async waitForProfileLoaded() {
        await this.userAvatar.waitFor();
        await this.userName.waitFor();
}
}
