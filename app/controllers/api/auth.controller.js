/**
 * @name AuthController
 * @type Class
 * @description Controlador encargado de la validación de usuarios en el sistema
 * @author Jaime Castrillón
 */

const { compare } = require('bcryptjs')
const { JWT } = require('../../base/jwt')
const { AuthService } = require('../../services/auth.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null

class AuthController {
	constructor() {
		_service = new AuthService()
	}

	/**
	 * @method auth
	 * @param req Request realizado al endpoint
	 * @param res Response realizado por el controlador
	 * @returns Process con la acción realizada (success / error)
	 */

	async auth(req, res) {
		try {
			const { username, password } = req.body
			if (!username || !password) {
				throw Message('LOGIN_INVALID')
			} else {
				const [user] = await _service.auth(username)
				if (!user) {
					throw Message('LOGIN_INVALID')
				} else {
					if (!user.status) {
						return Process.error(res, Message('AUTH_LOCKED'), 403)
					} else {
						const valid = await compare(password, user.password)
						if (!valid) {
							throw Message('LOGIN_INVALID')
						} else {
							_service.lastLogin(user.id, req.ip)
							delete user['password']
							delete user['status']
							const token = JWT.create(user)
							res.setHeader('Authorization', `Bearer ${token}`)
							Process.success(res, user)
						}
					}
				}
			}
		} catch (error) {
			Log4js.error(`[action: AuthController auth][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('LOGIN_INVALID'), 401)
		}
	}
}

module.exports.AuthController = AuthController
