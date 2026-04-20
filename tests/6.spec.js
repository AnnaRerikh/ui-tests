import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { registerUser } from '../src/helpers/auth.helper';
import { MainPage } from '../src/pages/main.page';
import { EditorPage } from '../src/pages/editor.page';
import { ArticlePage } from '../src/pages/article.page'

let text = {
    title: faker.lorem.words(3),
    subtitle: faker.lorem.words(5),
    maintext: faker.lorem.words(25),
    tag: faker.lorem.word(),
    comment: faker.lorem.words(25)
}

// Написание статьи новым юзером (сначала регистрация нового юзера через хелпер, потом написание статьи)
test('Создание статьи', async ({ page }) => {
    await registerUser(page);

    const main = new MainPage(page);
    const editor = new EditorPage(page); 
    const articlePage = new ArticlePage(page);

    await main.goToNewArticle();
    await editor.publish(text);

    await expect(articlePage.getTitle()).toHaveText(text.title);
    await expect(articlePage.getMainText()).toContainText(text.maintext);
    await expect(articlePage.getTag()).toContainText(text.tag);
});

// Апдейт статьи новым юзером (сначала регистрация нового юзера через хелпер, потом написание статьи + ее апдейт)
test('Апдейт статьи', async ({ page }) => {
    await registerUser(page);

    const main = new MainPage(page);
    const editor = new EditorPage(page); 
    const articlePage = new ArticlePage(page);

    const updatedText = {
    title: text.title + ' UPD',
    maintext: text.maintext + ' UPD'
};
   
    await main.goToNewArticle();
    await editor.publish(text);
    await articlePage.gotoEdit();
    await editor.updateArticle();

    await expect(articlePage.getTitle()).toHaveText(updatedText.title);
    await expect(articlePage.getMainText()).toContainText(updatedText.maintext);
    await expect(articlePage.getTag()).toContainText(text.tag);
    });

// Оставить комменатрий своей статье (сначала регистрация нового юзера через хелпер, потом написание статьи + оставить комментарий своей новой статье)

test('Оставить комментарий к статье', async ({ page }) => {
    await registerUser(page);

    const main = new MainPage(page);
    const editor = new EditorPage(page); 
    const articlePage = new ArticlePage(page);


    await main.goToNewArticle();
    await editor.publish(text);
    await articlePage.PostComment(text.comment);

    await expect(articlePage.getCommentByText()).toHaveText(text.comment);
     });


// Удалить свой комментарий (сначала регистрация нового юзера через хелпер, потом написание статьи, оставить комментарий, удалить комментарий)

test('Удалить свой комментарий', async ({ page }) => {
    await registerUser(page);

    const main = new MainPage(page);
    const editor = new EditorPage(page); 
    const articlePage = new ArticlePage(page);


    await main.goToNewArticle();
    await editor.publish(text);
    await articlePage.PostComment(text.comment);
    await articlePage.deleteComment();

    await expect(articlePage.getCommentByText(text.comment)).toHaveCount(0);
     });


     