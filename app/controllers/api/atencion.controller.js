/**
 * @name AtencionController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author anRoswell
 */

const { compare } = require('bcryptjs')
const { JWT } = require('../../base/jwt')
const { AtencionService } = require('../../services/atencion.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null

class AtencionController {
	constructor() {
		_service = new AtencionService()
	}

	/**
	 * @method Atencion
	 * @param req Request realizado al endpoint
	 * @param res Response realizado por el controlador
	 * @returns Process con la acción realizada (success / error)
	 */

	async atencion(req, res) {
		try {
			const action = req.body.action
			let resp
			if (action === 'register') {
				resp = await _service.atencion(req.body)
			} else {
				resp = await _service.editAtention(req.body)
			}

			//return Process.error(res, Message('AUTH_LOCKED'), 403)
			Process.success(res, resp)
		} catch (error) {
			Log4js.error(`[action: Atencion AtencionController][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('LOGIN_INVALID'), 500)
		}
	}
}

module.exports.AtencionController = AtencionController
