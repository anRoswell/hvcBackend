const Connection = require('./connection')
const Message = require('../messages/message')
const Log4js = require('../base/log4js')()

const Execute = (sql, params = []) => {
	console.log(sql)
	console.log(params)
	return new Promise((resolve, reject) => {
		try {
			Connection.getConnection((error, connection) => {
				if (error) {
					Log4js.error(`[action: Execute connection][msg: ${error.message}][file:${__filename}]`)
					reject(Message('DB_CONNECTION_ERROR'))
				} else {
					const query = connection.query(sql, params, (error, results) => {
						if (error) {
							Log4js.error(`[action: Execute query][msg: ${error.message}][file:${__filename}]`)
							if (error.code === 'ER_DUP_ENTRY') {
								reject(Message('DB_DUPLICATE'))
							} else if (error.code === 'ER_PARSE_ERROR') {
								reject(Message('DB_PARSE_ERROR'))
							} else if (error.code === 'ER_BAD_FIELD_ERROR') {
								reject(Message('DB_FIELD_ERROR'))
							} else {
								reject(Message('DB_QUERY_ERROR'))
							}
						} else {
							connection.release()
							resolve(results)
						}
					})
					console.info('SQL: ', query.sql)
				}
			})
		} catch (error) {
			console.log(error)
			Log4js.error(`[action: Execute catch][msg: ${error.message}][file:${__filename}]`)
			reject(Message('DB_QUERY_ERROR'))
		}
	})
}

module.exports = Execute
