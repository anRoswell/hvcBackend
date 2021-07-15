/**
 * @name PatientController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author anRoswell
 */

const { PatientService } = require('../../services/patient.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null

class PatientController {
	constructor() {
		_service = new PatientService()
	}

	/**
	 * @method all
	 * @param req Request realizado al endpoint
	 * @param res Response realizado por el controlador
	 * @returns Process con la acción realizada (success / error)
	 */
	async all(req, res) {
		try {
			const resp = await _service.all()
			Process.success(res, resp)
		} catch (error) {
			Log4js.error(`[action: PatientController all][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('ERROR_INTERNO'), 500)
		}
	}

	/**
	 * @method getAtentionsByPatient
	 * @param req Request realizado al endpoint
	 * @param res Response realizado por el controlador
	 * @returns Process con la acción realizada (success / error)
	 */
	async getAtentionsByPatient(req, res) {
		try {
			const { id } = req.params
			const { userIdCreatedAt } = req.query
			const resp = await _service.getAtentionsByPatient(id, userIdCreatedAt)
			Process.success(res, resp)
		} catch (error) {
			Log4js.error(`[action: PatientController getAtentionsByPatient][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('ERROR_INTERNO'), 500)
		}
	}
}

module.exports.PatientController = PatientController
