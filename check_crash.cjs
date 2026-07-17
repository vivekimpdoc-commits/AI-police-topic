const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  try {
    console.log('Navigating to localhost:5173/multi-agent');
    await page.goto('http://localhost:5173/multi-agent', { waitUntil: 'networkidle0', timeout: 10000 });
    console.log('Page loaded');
  } catch (e) {
    console.log('Error navigating:', e.message);
  } finally {
    await browser.close();
  }
})();
