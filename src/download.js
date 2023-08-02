const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('https://anmp.pt/municipios/municipios/contactos-camaras-municipais/')

	while (true) {
		console.log('Scrolling...')
		const button = await page.$('button[data-original="Ver mais"]')

		try {
			await button.click()
			await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for one second
		} catch (error) {
			console.log('No more buttons to click')
			break
		}
	}

	// save the whole html page
	console.log('Saving html file')
	const html = await page.content()
	// save it into a file
	const fs = require('fs')
	fs.writeFileSync('data/municipalities.html', html)
	console.log('Saved html file')

	await browser.close()
})()
