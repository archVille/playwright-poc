const { test, expect } = require('@playwright/test');

test('Just a demo to test the command', async ({page}) => {
  await expect(true).toBe(true);
});