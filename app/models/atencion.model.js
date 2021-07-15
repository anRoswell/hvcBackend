/**
 * @name AtencionModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author anRoswell
 */

const { Model } = require('../base/model')

class AtencionModel extends Model {
	constructor() {
		super('atenciones')
	}
}

module.exports.AtencionModel = AtencionModel
