/**
 * @name ProfileService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { ProfileModel } = require('../models/profile.model')

class ProfileService extends Service {
	constructor() {
		super(new ProfileModel())
	}
}

module.exports.ProfileService = ProfileService
