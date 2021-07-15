/**
 * @name PatientModel
 * @type Class
 * @description Modelo encargado de los pacientes
 * @author anRoswell
 */

const { Model } = require('../base/model')

class PatientModel extends Model {
	constructor() {
		super('patients')
	}

	async getAtentionsByPatient(patientId, userIdCreatedAt) {
		try {
			const sql = `
        SELECT * 
        FROM ?? a
        INNER JOIN patients p ON a.patientId = p.id
        WHERE a.patientId = ?
				AND a.userIdCreatedAt = ?
        Limit 20
      `
			return await super.query(sql, ['atenciones', patientId, userIdCreatedAt])
		} catch (error) {
			Log4js.error(`[action: patient.Model getAtentionsByPatient][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.PatientModel = PatientModel
