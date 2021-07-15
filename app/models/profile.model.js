/**
 * @name ProfileModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class ProfileModel extends Model {
	constructor() {
		super('profiles')
	}
}

module.exports.ProfileModel = ProfileModel
