import fs from 'fs-extra'
import createCsvWriter from 'csv-writer'

/**
 * Write data to the CSV file.
 * @param {Object[]} data - Data to be written to the CSV file.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise<void>} - A Promise that resolves when the data is written.
 */
async function writeDataToCsv(data, filePath) {
	const csvWriter = createCsvWriter.createObjectCsvWriter({
		path: filePath,
		header: [
			{ id: 'name', title: 'Nome' },
			{ id: 'address', title: 'Localização' },
			{ id: 'president', title: 'Presidente' },
			{ id: 'phone1', title: 'Phone 1' },
			{ id: 'phone2', title: 'Phone 2' },
			{ id: 'email', title: 'Email' },
			{ id: 'website', title: 'Website' },
		],
	})

	await csvWriter.writeRecords(data)
	console.log('Data has been successfully written to the CSV file.')
}

export default writeDataToCsv
