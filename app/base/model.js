/**
 * @name Model
 * @type Class
 * @description Clase base de la cual extienden los modelos de la aplicación
 * @author Jaime Castrillón
 */

const { Database } = require('../database/database')
const Log4js = require('./log4js')()

class Model {
	constructor(table) {
		this.table = table
	}

	async create(fields, ignore = false) {
		try {
			return await Database.create(this.table, fields, ignore)
		} catch (error) {
			Log4js.error(`[action: Model create][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async update(fields, id) {
		try {
			return await Database.update(this.table, fields, id)
		} catch (error) {
			Log4js.error(`[action: Model update][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async delete(id) {
		try {
			return await Database.delete(this.table, id)
		} catch (error) {
			Log4js.error(`[action: Model delete][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async one(id, fields) {
		try {
			return await Database.one(this.table, id, fields)
		} catch (error) {
			Log4js.error(`[action: Model one][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async all(fields, where, order) {
		try {
			return await Database.all(this.table, fields, where, order)
		} catch (error) {
			Log4js.error(`[action: Model all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async query(sql, params) {
		try {
			return await Database.query(sql, params)
		} catch (error) {
			Log4js.error(`[action: Model query][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.Model = Model
