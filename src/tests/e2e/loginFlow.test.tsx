/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

beforeEach(async () => {
  await page.goto('http://localhost:3000/');
});

describe('super awesome end to end tests', () => {
  jest.setTimeout(20000);

  test('if it does something', async () => {
    // ...
  });
});
