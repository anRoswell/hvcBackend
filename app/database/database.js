const Execute = require('./excecute')
const Log4js = require('../base/log4js')()

class Database {
	static create(table, fields, ignore) {
		try {
			const sql = `INSERT ${ignore ? 'IGNORE' : ''} INTO ?? SET ?;`
			return Execute(sql, [table, fields])
		} catch (error) {
			Log4js.error(`[action: Database create][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	static update(table, fields, id) {
		try {
			const sql = 'UPDATE ?? SET ? WHERE `id`=?;'
			return Execute(sql, [table, fields, id])
		} catch (error) {
			Log4js.error(`[action: Database update][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	static delete(table, id) {
		try {
			// const sql = 'DELETE FROM ?? WHERE `id`=?;'
			const sql = 'UPDATE ?? SET `status`=0 WHERE `id`=?;'
			return Execute(sql, [table, id])
		} catch (error) {
			Log4js.error(`[action: Database delete][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	static one(table, id, fields) {
		try {
			const hasFields = !!Object.keys(fields).length
			const sql = hasFields ? 'SELECT ?? FROM ?? WHERE `id`=?;' : 'SELECT * FROM ?? WHERE `id`=?;'
			const params = hasFields ? [fields, table, id] : [table, id]
			return Execute(sql, params)
		} catch (error) {
			Log4js.error(`[action: Database one][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	static all(table, fields, where, order) {
		try {
			const hasWhere = !!Object.keys(where).length
			const sql = hasWhere ? 'SELECT ?? FROM ?? WHERE ? ORDER BY ??;' : 'SELECT ?? FROM ?? ORDER BY ??;'
			const params = hasWhere ? [fields, table, where, order] : [fields, table, order]
			return Execute(sql, params)
		} catch (error) {
			Log4js.error(`[action: Database all][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	static query(sql, params = []) {
		try {
			return Execute(sql, params)
		} catch (error) {
			Log4js.error(`[action: Database query][msg: ${error.message}][file:${__filename}]`)
			reject(error)
		}
	}
}

module.exports.Database = Database
