require('dotenv').config()
const { sign, verify } = require('jsonwebtoken')
const { encrypt, decrypt } = require('simple-encryptor')(process.env.JWT_ENCRYPT)
const Message = require('../messages/message')
const Log4js = require('../base/log4js')()

const JWT = {
  create: ({ id, profileId }) => {
    try {
      return sign({ sub: encrypt({ id, profileId }) }, process.env.JWT_SESSION, { expiresIn: '1h' })
    } catch (error) {
      Log4js.error(
        `[action: JWT:create][msg: ${(JSON.stringify(user), JSON.stringify(error.message))}][file: ${__filename}]`,
      )
      return ''
    }
  },
  /*
  isAuth: (req, res, next) => {
    try {
      const {
        headers: { authorization },
      } = req
      if (authorization) {
        const payload = jwt.verify(authorization.split(' ').pop(), process.env.JWT_SESSION)
        console.log(payload)
        if (payload) {
          if (payload.iat < moment().unix()) {
            res.status(401).json(Message('AUTH_EXPIRED'))
          } else {
            const user = decrypt(payload.sub)
            const token = JWT.create(user)
            res.header('Authorization', `Bearer ${token}`)
            log4js.info(`[action: JWT:isAuth][msg: ${JSON.stringify(user)}][file: ${__filename}]`)
            next()
          }
        } else {
          log4js.info(`[action: JWT:isAuth][msg: Petición con payload incorrecto][file: ${__filename}]`)
          res.status(403).json(Message('AUTH_INVALID'))
        }
      } else {
        log4js.info(`[action: JWT:isAuth][msg: Petición con Token inválido][file: ${__filename}]`)
        res.status(403).json(Message('AUTH_INVALID'))
      }
    } catch (error) {
      log4js.info(`[action: JWT:isAuth][msg: Error en validación del Token, ${error.message}][file: ${__filename}]`)
      res.status(403).json(Message('AUTH_INVALID'))
    }
  },
  */
}

module.exports.JWT = JWT
