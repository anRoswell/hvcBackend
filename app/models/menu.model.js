/**
 * @name MenuModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class MenuModel extends Model {
	constructor() {
		super('menus')
	}
}

module.exports.MenuModel = MenuModel
