const HTML5ToPDF = require('./lib')
const path = require('path')
const { PlantillasContratos } = require('./plantillasContratos/plantillas')
let plantillas = null

const run = async () => {
	const name = `pruebaHVC.pdf`
	let urlContrato = `./carpetaPDF/`
	plantillas = new PlantillasContratos()
	const contratoHTML = plantillas.plantilla2()
	urlContratoPdf = path.join(__dirname, `./../../../uploads/${urlContrato}`, `${name}`)
	//inputBody: contratoHTML,
	//inputPath: path.join(__dirname, 'assets', 'basic.html'),
	const html5ToPDF = new HTML5ToPDF({
		inputBody: contratoHTML,
		outputPath: urlContratoPdf,
		include: [path.join(__dirname, 'assets', 'basic.css'), path.join(__dirname, 'assets', 'custom-margin.css')],
	})

	await html5ToPDF.start()
	await html5ToPDF.build()
	await html5ToPDF.close()

	return {
		name,
		urlContratoPdf,
	}
}

module.exports = {
	run,
}
