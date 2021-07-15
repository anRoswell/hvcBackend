/**
 * @name AuthService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author Jaime Castrillón
 */

const { UserModel } = require('../models/user.model')
const Log4js = require('../base/log4js')()
let _model = null

class AuthService {
  constructor() {
    _model = new UserModel()
  }

  async auth(username) {
    try {
      return await _model.auth(username)
    } catch (error) {
      Log4js.error(`[action: AuthService auth][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async lastLogin(id, ip) {
    try {
      return await _model.lastLogin(id, ip)
    } catch (error) {
      Log4js.error(`[action: AuthService lastLogin][msg: ${error.message}][file:${__filename}]`)
      return false
    }
  }

}

module.exports.AuthService = AuthService