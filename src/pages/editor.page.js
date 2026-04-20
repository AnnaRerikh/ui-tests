export class EditorPage 
{
    constructor (page)
    {
       this.page = page;

       this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
       this.aboutInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
       this.mainTextInput = page.getByRole('textbox', { name: 'Write your article (in' });
       this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' });
       this.publishButton = page.getByRole('button', { name: 'Publish Article' });
       this.updateButton = page.getByRole('button', { name: 'Update Article' });
    }
    async publish (article)
    {
      const { title, subtitle, maintext, tag } = article;

      await this.titleInput.click();
      await this.titleInput.fill(title);
      await this.aboutInput.click();
      await this.aboutInput.fill(subtitle);
      await this.mainTextInput.click();
      await this.mainTextInput.fill(maintext);
      await this.tagsInput.click();
      await this.tagsInput.fill(tag);
      await this.publishButton.click();
    } 


    async updateArticle ()
    {
      await this.titleInput.click();
      await this.titleInput.type(' UPD');
      await this.aboutInput.click();
      await this.aboutInput.type(' UPD');
      await this.mainTextInput.click();
      await this.mainTextInput.type( ' UPD');
      await this.updateButton.click();
    } 
}