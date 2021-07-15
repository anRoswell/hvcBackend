const path = require('path')
const fs = require('fs')
const uniqid = require('uniqid')
const { format } = require('date-fns')

class Base64ToImg {
	constructor() {}

	async convert(base64, path, nombreArchivo, userObject = '') {
		return await new Promise((resolve, reject) => {
			try {
				const filePath = `${path.pathUserFinal}/${nombreArchivo}.png`

				const base64Data = base64.replace(/^data:image\/png;base64,/, '')

				fs.writeFile(`${filePath}`, base64Data, 'base64', function (err) {
					console.log(err)
					reject(err)
				})

				resolve(true)
			} catch (e) {
				reject(e)
			}
		})
	}

	generarNombreUnico() {
		const idUnico = uniqid()

		return idUnico
	}

	crearCarpetaUsuario(userId, carpeta) {
		const pathBD = `${carpeta}/${userId}/${format(new Date(), 'yyyMMdd')}`
		const pathRaiz = path.resolve(__dirname, `../../uploads/${carpeta}`)
		const pathUser = `${pathRaiz}/${userId}`
		const pathDate = `${pathUser}/${format(new Date(), 'yyyMMdd')}`
		const pathUserCuentaContrato = `${pathDate}`
		const pathUserFinal = `${pathUserCuentaContrato}/`

		let exist = fs.existsSync(pathRaiz)
		if (!exist) {
			fs.mkdirSync(pathRaiz)
		}

		exist = fs.existsSync(pathUser)
		if (!exist) {
			fs.mkdirSync(pathUser)
		}

		exist = fs.existsSync(pathDate)
		if (!exist) {
			fs.mkdirSync(pathDate)
		}

		exist = fs.existsSync(pathUserCuentaContrato)
		if (!exist) {
			fs.mkdirSync(pathUserCuentaContrato)
		}

		exist = fs.existsSync(pathUserFinal)
		if (!exist) {
			fs.mkdirSync(pathUserFinal)
		}

		const paths = {
			pathUserFinal,
			pathBD,
		}

		return paths
	}
}

module.exports = Base64ToImg
