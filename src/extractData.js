// CONSTANTS
// Use constants for magic strings and selectors
const NAME_SELECTOR = 'div > div.title.small-11.columns.no-padding > div > div > div'
const ADDRESS_SELECTOR = 'div > div > div.content'
const PRESIDENT_SELECTOR = 'div > div > div.item.general-content'
const PHONE_1_SELECTOR = 'div > div > div:nth-child(4) > span.value > a'
const PHONE_2_SELECTOR = 'div > div > div:nth-child(5) > span.value > a'
const EMAIL_SELECTOR = 'div > div > div:nth-last-child(2) > span.value > a'
const WEBSITE_SELECTOR = 'div > div > div:last-child > span.value > a'

/**
 * Extract data from the Cheerio object.
 * @param {CheerioStatic} $ - The Cheerio object.
 * @returns {Object[]} - An array of municipality objects.
 */
function extractData($) {
	const names = $(NAME_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const addresses = $(ADDRESS_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const presidents = $(PRESIDENT_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const phone1s = $(PHONE_1_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const phone2s = $(PHONE_2_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const emails = $(EMAIL_SELECTOR)
		.map((i, el) => $(el).text().trim())
		.get()

	const websites = $(WEBSITE_SELECTOR)
		.map((i, el) => $(el).attr('href').trim())
		.get()

	// TRANSFORM DATA
	// Transform extracted data into desired structure
	const municipalities = names.map((name, i) => ({
		name,
		address: addresses[i],
		president: presidents[i],
		phone1: phone1s[i],
		phone2: phone2s[i],
		email: emails[i],
		website: websites[i],
	}))

	// CLEAN DATA
	municipalities.forEach(cleanMunicipality)

	function cleanMunicipality(municipality) {
		if (municipality.phone2 === municipality.email) {
			municipality.phone2 = ''
		}

		municipality.president = municipality.president.slice(12)
	}

	return municipalities
}

export default extractData
