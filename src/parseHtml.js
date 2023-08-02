import fs from 'fs-extra'
import cheerio from 'cheerio'

/**
 * Parse the HTML file and return a Cheerio object.
 * @param {string} filePath - Path to the HTML file.
 * @returns {Promise<CheerioStatic>} - A Promise that resolves to a Cheerio object.
 */
async function parseHtmlFile(filePath) {
	const html = await fs.readFile(filePath, 'utf8')
	return cheerio.load(html)
}

export default parseHtmlFile
