import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add valid class', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=card-num-form-widget]');
    const input = await form.$('[data-id=card-num-input]');
    await input.type('6011235596645859');
    const submit = await form.$('[data-id=card-num-submit]');
    submit.click();
    await page.waitForSelector('[data-id=card-num-input].valid');
  });

  test('should add invalid class', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=card-num-form-widget]');
    const input = await form.$('[data-id=card-num-input]');
    await input.type('00000000');
    const submit = await form.$('[data-id=card-num-submit]');
    submit.click();
    await page.waitForSelector('[data-id=card-num-input].invalid');
  });
});
