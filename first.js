const playwright = require('playwright');

(async () => {

    const browser = await playwright["chromium"].launch(
        {
            headless : false
        }
    );

   const context = (await browser).newContext();

   const page = await (await context).newPage();

   await page.goto("xxxx");

//    await browser.close();

})