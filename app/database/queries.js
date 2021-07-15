const Execute = require('./excecute');
const Response = require('../base/response')
const Message = require('../messages/message')
const queries = require('./queries.json')
const log4js = require('../base/log4js')()

class Queries {

    static create(table, fields, ignore) {
        try {
            const sql = `INSERT ${(ignore) ? 'IGNORE' : ''} INTO ?? SET ?;`
            return Execute(sql, [table, fields])
        } catch (error) {
            log4js.error(`[action: Queries create][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static update(table, fields, id) {
        try {
            const sql = 'UPDATE ?? SET ? WHERE `id`=?;'
            return Execute(sql, [table, fields, id])
        } catch (error) {
            log4js.error(`[action: Queries update][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static delete(table, id) {
        try {
            // const sql = 'DELETE FROM ?? WHERE `id`=?;'
            const sql = 'UPDATE ?? SET `status`=0 WHERE `id`=?;'
            return Execute(sql, [table, id])
        } catch (error) {
            log4js.error(`[action: Queries delete][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static one(table, id, fields) {
        try {
            const sql = (fields) ? 'SELECT ?? FROM ?? WHERE `id`=?;' : 'SELECT * FROM ?? WHERE `id`=?;'
            const params = (fields) ? [fields, table, id] : [table, id]
            return Execute(sql, params)
        } catch (error) {
            log4js.error(`[action: Queries one][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static all(table, fields, where, order) {
        try {
            const sql = (where) ? 'SELECT ?? FROM ?? WHERE ? ORDER BY ??;' : 'SELECT ?? FROM ?? ORDER BY ??;'
            const params = (where) ? [fields, table, where, order] : [fields, table, order]
            return Execute(sql, params)
        } catch (error) {
            log4js.error(`[action: Queries all][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static in (table, fields, field, values) {

    }

    static count(table, field, where) {

    }

    static distinct(table, field, where) {

    }

    static auth(username) {
        try {
            const sql = `
      SELECT
        id,
        name,
        username,
        email,
        profileId,
        password,
        lastDateLogin,
        lastIpLogin
      FROM ??
      WHERE username = ?;
      `
            return Execute(sql, ['users', username])
        } catch (error) {
            log4js.error(`[action: Queries auth][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static lastLogin(id, ip) {
        try {
            const sql = 'UPDATE `users` SET `lastDateLogin`=?, `lastIpLogin`=? WHERE id=?;'
            return Execute(sql, [new Date(), ip, id])
        } catch (error) {
            log4js.error(`[action: Queries lastLogin][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static menus(profileId) {
        try {
            const sql = `
      SELECT
        m.id,
        m.name,
        m.url,
        m.icon,
        m.menuId,
        m.divider
      FROM menus m
      INNER JOIN access a ON m.id = a.menuId
      WHERE m.status = 0 AND a.profileId=?
      ORDER BY m.menuId, m.order;`
            return Execute(sql, [profileId])
        } catch (error) {
            log4js.error(`[action: Queries menus][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }

    static query(query, name, params) {

    }

}

module.exports = Queries