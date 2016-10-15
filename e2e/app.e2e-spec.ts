import { PersonalBlogPage } from './app.po';

describe('personal-blog App', function() {
  let page: PersonalBlogPage;

  beforeEach(() => {
    page = new PersonalBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
