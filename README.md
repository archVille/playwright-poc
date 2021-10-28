Info
This E2E automation test framework have been created as a POC using Playwright with Javascript.

Installation 

(need to have npm installed!)

1. npm i -D @playwright/test
# install supported browsers
2. npx playwright install


Run

If you want to run in chromium mode
npx playwright test --headed

Also for headed more we can use slowMo to slow down execution 
await chromium.launch({ headless: false, slowMo: 100 }); 

Some other useful commands to run playwright:

npx playwright test --headed --debug
this will enable the Playwright Inspector which is a GUI tool that helps debugging scripts

npx playwright test --config=playwright.config.js
this will use config settings

for example if we want to test in FFox by picking up from config
npx playwright test --browser=firefox



3. Useful toolies

- We can record trace:
npx playwright test --headed show-trace trace.zip
, this will produce trace.zip locally for each test run. This is a Playwright Trace viewer GUI tool that helps troubleshooting
https://playwright.dev/docs/trace-viewer/

- screenshots:


- saving authentication cookie
npx playwright open --save-storage temp.json





Why PlayWright?

- Microsoft
- Open source
- Puppeteer > Playwright
- Nodejs. library automate Chromium, FFox, WebKit with single API
- Cross web-automation

Features
- Headless execution, no add-on (like Selenium)
- Async / auto-wait for elements
- Javascript, python, C#
- Intercept network activity (pros over Selenium)
- Captures, screenshots, videos
- Records script
- Test parallelisation







