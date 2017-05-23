import { TerminalPage } from './app.po';

describe('terminal App', () => {
  let page: TerminalPage;

  beforeEach(() => {
    page = new TerminalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('term works!');
  });
});
