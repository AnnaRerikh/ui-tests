export class ArticlePage 
{
    constructor (page)
    {
       this.page = page;
       this.title = page.locator('h1');
       this.mainText = page.locator('.article-content');
       this.tag = page.locator('.tag-list');
       this.editButton = page.getByRole('button', { name: /Edit Article/ }).first();
       this.deleteButton = page.getByRole('button', { name: /Delete Article/ }).first();
       this.commentInput = page.getByRole('textbox', { name: 'Write a comment...' });
       this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
       this.commentText = page.locator('.card-text');
       this.thashCommentButton = page.locator('button:has(i.ion-trash-a)');
    }

  getTitle() {
        return this.title;
    } 
 getMainText() {
        return this.mainText;
    } 
 getTag() {
        return this.tag;
    } 
 async gotoEdit ()
    {
        await this.editButton.click();
    }  
 async gotoDelete () 
   {
        await this.deleteButton.click();
   } 
 async PostComment (comment) 
   {
    const commentText = comment;
         
        await this.commentInput.click();
        await this.commentInput.fill(commentText);
        await this.postCommentButton.click();
   }
 getCommentByText(text) {
        return this.commentText.filter({ hasText: text });
   }

    async deleteComment(comment) {
  const deleteButton = this.page
        .locator('.card')
        .filter({ hasText: comment })
        .locator('button:has(i.ion-trash-a)');
        
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        
        await deleteButton.click();
    }
}
