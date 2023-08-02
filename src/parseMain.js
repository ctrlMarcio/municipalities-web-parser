import parseHtmlFile from './parseHtml.js'
import extractData from './extractData.js'
import writeDataToCsv from './writeDataToCsv.js'

/**
 * Main function to process the data.
 * @returns {Promise<void>} - A Promise that resolves when data processing is complete.
 */
async function processData() {
	try {
		const htmlFilePath = 'data/municipalities.html'
		const csvFilePath = 'data/municipalities.csv'

		const $ = await parseHtmlFile(htmlFilePath)
		const municipalities = extractData($)

		await writeDataToCsv(municipalities, csvFilePath)
	} catch (error) {
		console.error('An error occurred while processing the data:', error.message)
	}
}

processData()
