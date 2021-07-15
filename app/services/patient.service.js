/**
 * @name MainFormService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author anRoswell
 */

const { PatientModel } = require('../models/patient.model')
const Log4js = require('../base/log4js')()

let _model = null

class PatientService {
	constructor() {
		_model = new PatientModel()
	}

	async all() {
		try {
			const fields = ['name', 'lastName', 'document', 'id', 'epsId']
			const where = { estado: 1 }
			const order = ['name']
			return await _model.all(fields, where, order)
		} catch (error) {
			Log4js.error(`[action: PatientService all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async getAtentionsByPatient(patientId, userIdCreatedAt) {
		try {
			return await _model.getAtentionsByPatient(patientId, userIdCreatedAt)
		} catch (error) {
			Log4js.error(`[action: PatientService getAtentionsByPatient][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.PatientService = PatientService
