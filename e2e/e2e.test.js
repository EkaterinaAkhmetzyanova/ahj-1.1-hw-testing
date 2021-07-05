import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
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
    await input.type('123456789123456');
    const submit = await form.$('[data-id=card-num-submit]');
    submit.click();
    await page.waitForSelector('[data-id=card-num-input].invalid');
  });
});
