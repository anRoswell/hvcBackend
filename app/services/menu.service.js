/**
 * @name MenuService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { MenuModel } = require('../models/menu.model')

class MenuService extends Service {
	constructor() {
		super(new MenuModel())
	}
}

module.exports.MenuService = MenuService
