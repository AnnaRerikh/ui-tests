export class RegisterPage 
{
    constructor (page)
    {
       this.page = page;

       // Техническое описание страницы - селекторы/локаторы
       this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
       this.emailInput = page.getByRole('textbox', { name: 'Email' });
       this.passwordInput = page.getByRole('textbox', { name: 'Password' });
       this.singupButton = page.getByRole('button', { name: 'Sign up' });
      
    }

    // Бизнесовые сценарии
    async signup (user) {
        const {email, username, password} = user

          await this.nameInput.click();
          await this.nameInput.fill(username);
          await this.emailInput.click();
          await this.emailInput.fill(email);
          await this.passwordInput.click();
          await this.passwordInput.fill(password);
          await this.singupButton.click();
    }
}