export class MainPage 
{
    constructor (page)
    {
       this.page = page;
       this.signupLink = page.getByRole('link', { name: 'Sign up' });
       this.newArticleLink = page.getByRole('link', { name: 'New Article' });
       this.signinLink = page.getByRole('link', { name: 'Login' });
    }
    async gotoRegister ()
    {
        await this.signupLink.click();
    }

    async gotoLogin ()
    {
        await this.signinLink.click();
    }

    
    //to do
    async open ()
    {
        await this.page.goto('https://realworld.qa.guru/');
    }

       async goToNewArticle () 
    {
        await this.newArticleLink.click();
    }
    
}