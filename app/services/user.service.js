/**
 * @name UserService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { UserModel } = require('../models/user.model')
const Log4js = require('../base/log4js')()

let _model = null

class UserService extends Service {
	constructor() {
		super(new UserModel())
		_model = new UserModel()
	}

	async create(fields) {
		try {
			return await _model.create(fields)
		} catch (error) {
			Log4js.error(`[action: create user.service][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.UserService = UserService
