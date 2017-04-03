import { HandsontableDemoPage } from './app.po';

describe('handsontable-demo App', () => {
  let page: HandsontableDemoPage;

  beforeEach(() => {
    page = new HandsontableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
