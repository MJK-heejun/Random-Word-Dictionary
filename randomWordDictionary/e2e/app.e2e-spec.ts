import { RandomWordDictionaryPage } from './app.po';

describe('random-word-dictionary App', () => {
  let page: RandomWordDictionaryPage;

  beforeEach(() => {
    page = new RandomWordDictionaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
