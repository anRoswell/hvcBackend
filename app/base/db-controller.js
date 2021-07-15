const Queries   = require('../database/queries')
const Response  = require('./response')
const Message   = require('../messages/message')
const log4js = require('../base/log4js')()

class DBController {

  async create(table, fields, ignore = false) {
    try {
      fields.createdAt = new Date()
      const { insertId } = await Queries.create(table, fields, ignore)
      return Response.success({ action: 'created', id: insertId }, 201)
    } catch (error) {
      log4js.error(`[action: DBController create][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async update(table, fields, id) {
    try {
      fields.updatedAt = new Date()
      const { affectedRows } = await Queries.update(table, fields, id)
      if(affectedRows) {
        return Response.success({ action: 'updated', id }, 200)
      } else {
        throw Response.error(Message('ID_NOT_EXISTS'), 404)
      }
    } catch (error) {
      log4js.error(`[action: DBController update][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async delete(table, id) {
    try {
      const { affectedRows } = await Queries.delete(table, id)
      if(affectedRows) {
        return Response.success({ action: 'deleted', id }, 200)
      } else {
        throw Response.error(Message('ID_NOT_EXISTS'), 404)
      }
    } catch (error) {
      log4js.error(`[action: DBController delete][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async one(table, id, fields) {
    try {
      const [data] = await Queries.one(table, id, fields)
      return Response.success(data)
    } catch (error) {
      log4js.error(`[action: DBController one][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async all(table, fields, where, order) {
    try {
      const data = await Queries.all(table, fields, where, order)
      return Response.success(data)
    } catch (error) {
      log4js.error(`[action: DBController all][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async auth(username) {
    try {
      return await Queries.auth(username)
    } catch (error) {
      log4js.error(`[action: DBController auth][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async lastLogin(id, ip) {
    try {
      return await Queries.lastLogin(id, ip)
    } catch (error) {
      log4js.error(`[action: DBController lastLogin][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async menus(profileId) {
    try {
      return await Queries.menus(profileId)
    } catch (error) {
      log4js.error(`[action: DBController menus][msg: ${error.message}][file:${__filename}]`)
      return []
    }
  }
  

}

module.exports = DBController;