const puppeteer = require('puppeteer');

function sleep(ms) {
	return new Promise( (complete) => setTimeout(complete, ms ));
}

(async () => {
	const browser = await puppeteer.launch({ headless: false, args: ['--hide-scrollbars', '--mute-audio', '--use-gl=egl', '--no-sandbox', '--disable-dev-shm-usage'] });
	const page = await browser.newPage();
	await page.goto('http://get.webgl.org');
	//await this.page.goto('chrome://gpu');
        const info = await page.evaluate(() => {
	  var canvas = document.createElement('canvas');
          var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	  var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          return  gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) + ' ' + gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        });
	console.log(info);
        page.close();
        browser.close();
        process.exit(0);
})();

