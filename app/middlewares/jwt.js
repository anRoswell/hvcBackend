require('dotenv').config()
const jwt = require('jsonwebtoken')
const { encrypt, decrypt } = require('simple-encryptor')(process.env.JWT_ENCRYPT)
const log4js = require('../base/log4js')()
const Message = require('../messages/message')

const JWT = {
	create: (user) => {
		try {
			const { id, profileId } = user
			const payload = {
				sub: encrypt({ id, profileId }),
			}
			return jwt.sign(payload, process.env.JWT_SESSION, { expiresIn: '1h' })
		} catch (error) {
			log4js.error(
				`[action: JWT:create][msg: ${(JSON.stringify(user), JSON.stringify(error.message))}][file: ${__filename}]`,
			)
			return ''
		}
	},

	isAuth: (req, res, next) => {
		try {
			const {
				headers: { authorization },
			} = req
			if (authorization) {
				const payload = jwt.verify(authorization.replace('Bearer ', ''), process.env.JWT_SESSION)
				if (payload) {
					const user = decrypt(payload.sub)
					const token = JWT.create(user)
					res.header('Authorization', `Bearer ${token}`)
					log4js.info(
						`[action: JWT:isAuth][msg: ${JSON.stringify(user)} ${JSON.stringify(payload)}][file: ${__filename}]`,
					)
					next()
				} else {
					log4js.info(`[action: JWT:isAuth][msg: Petición con payload incorrecto][file: ${__filename}]`)
					res.status(403).json(Message('AUTH_EXPIRED'))
				}
			} else {
				log4js.info(`[action: JWT:isAuth][msg: Petición con Token inválido][file: ${__filename}]`)
				res.status(403).json(Message('AUTH_EXPIRED'))
			}
		} catch (error) {
			log4js.info(`[action: JWT:isAuth][msg: Error en validación del Token, ${error.message}][file: ${__filename}]`)
			res.status(403).json(Message('AUTH_EXPIRED'))
		}
	},
}

module.exports = JWT
