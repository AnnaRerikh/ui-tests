export class MainPage 
{
    constructor (page)
    {
       this.page = page;
       this.signupLink = page.getByRole('link', { name: 'Sign up' });
    }
    async gotoRegister ()
    {
        await this.signupLink.click();
    }
    
    //to do
    async open ()
    {
        await this.page.goto('https://realworld.qa.guru/');
    }
}


