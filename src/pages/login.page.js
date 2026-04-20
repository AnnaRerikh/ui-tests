export class LoginPage 
{
    constructor (page)
    {
       this.page = page;
       this.emailInput = page.getByRole('textbox', { name: 'Email' });
       this.passwordInput = page.getByRole('textbox', { name: 'Password' });
       this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async signin () {

        await this.emailInput.click();
        await this.emailInput.fill('carsturka@getnada.com');
        await this.passwordInput.click();
        await this.passwordInput.fill('12345678');
        await this.loginButton.click();
    }
}
