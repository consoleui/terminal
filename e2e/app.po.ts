import { browser, by, element } from 'protractor';

export class TerminalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('term-root h1')).getText();
  }
}
