const puppeteer = require('puppeteer')
const assert = require("assert");

test('valid number', async () => {
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  await page.goto('http://localhost:8081/')
  await page.waitForSelector(`.button`, {timeout: 10000, visible: true});
  await page.click('.button', '4444');
  assert.ok(await page.$('.popup') != null);
  await browser.close();
  });