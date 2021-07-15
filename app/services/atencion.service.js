/**
 * @name MainFormService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { AtencionModel } = require('../models/atencion.model')
const Log4js = require('../base/log4js')()
const { format } = require('date-fns')
const Base64ToImg = require('./../utils/base64ToImg')
base64ToImg = new Base64ToImg()
const concepto = 'firmas'
let path, nombreArchivo

let _model = null

class AtencionService {
	constructor() {
		_model = new AtencionModel()
	}

	async atencion(data) {
		try {
			nombreArchivo = base64ToImg.generarNombreUnico()
			path = base64ToImg.crearCarpetaUsuario(data.userIdCreatedAt, concepto)
			firmaFinal = await base64ToImg.convert(data.sign, path, nombreArchivo)
			data.signUrl = `${path.pathBD}/${nombreArchivo}.png`
			delete data.sign
			delete data.patientSign
			delete data.action
			const dateSplit = data.date.split('/')
			data.date = format(new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]), 'yyyy-MM-dd')
			return await _model.create(data)
		} catch (error) {
			Log4js.error(`[action: atencion atencionService][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async editAtention(data) {
		try {
			nombreArchivo = base64ToImg.generarNombreUnico()
			path = base64ToImg.crearCarpetaUsuario(data.userIdCreatedAt, concepto)
			firmaFinal = await base64ToImg.convert(data.sign, path, nombreArchivo)
			data.signUrl = `${path.pathBD}/${nombreArchivo}.png`
			delete data.sign
			delete data.patientSign
			delete data.action
			const dateSplit = data.date.split('/')
			data.date = format(new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]), 'yyyy-MM-dd')
			return await _model.update(data)
		} catch (error) {
			Log4js.error(`[action: atencion atencionService][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async lastLogin(id, ip) {
		try {
			return await _model.lastLogin(id, ip)
		} catch (error) {
			Log4js.error(`[action: lastLogin atencionService][msg: ${error.message}][file:${__filename}]`)
			return false
		}
	}
}

module.exports.AtencionService = AtencionService
