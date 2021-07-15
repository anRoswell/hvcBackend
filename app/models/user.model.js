/**
 * @name UserModel
 * @type Class
 * @description Model encargado de los usuarios
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')
const Log4js = require('../base/log4js')()

class UserModel extends Model {
	constructor() {
		super('users')
	}

	async create(fields, ignore = false) {
		try {
			return await super.create(fields)
		} catch (error) {
			log4js.error(`[action: Queries create][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async auth(username = '') {
		try {
			const sql = `
        SELECT
          id,
          name,
          email,
          profileId,
          password,
          status,
          lastDateLogin,
          lastIpLogin
        FROM ??
        WHERE username = ?;
      `
			return await super.query(sql, ['users', username])
		} catch (error) {
			Log4js.error(`[action: UserModel auth][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async lastLogin(id, ip) {
		try {
			const sql = 'UPDATE ?? SET `lastDateLogin`=?, `lastIpLogin`=? WHERE `id`=?;'
			return await super.query(sql, ['users', new Date(), ip, id])
		} catch (error) {
			log4js.error(`[action: UserModel lastLogin][msg: ${error.message}][file:${__filename}]`)
			return false
		}
	}
}

module.exports.UserModel = UserModel
