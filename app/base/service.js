/**
 * @name Service
 * @type Class
 * @description Clase base de la cual extienden los servicios encargados de implementar
 * la funcionalidad de los modelos de la aplicación
 * @author Jaime Castrillón
 */

const Log4js  = require('../base/log4js')()
let _model = null;

class Service {

  constructor(model) {
    _model = model
  }

  async create(fields, ignore = false) {
    try {
      fields.createdAt = new Date()
      const { insertId } = await _model.create(fields, ignore)
      return { action: 'created', id: insertId }
    } catch (error) {
      Log4js.error(`[action: Service create][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async update(fields, id) {
    try {
      fields.updatedAt = new Date()
      const { affectedRows } = await _model.update(fields, id)
      if(affectedRows) {
        return { action: 'updated', id }
      } else {
        throw Message('ID_NOT_EXISTS')
      }
    } catch (error) {
      Log4js.error(`[action: Service update][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async delete(id) {
    try {
      const { affectedRows } = await _model.delete(id)
      if(affectedRows) {
        return { action: 'deleted', id }
      } else {
        throw Message('ID_NOT_EXISTS')
      }
    } catch (error) {
      Log4js.error(`[action: Service delete][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async one(id, fields) {
    try {
      const [data] = await _model.one(id, fields)
      if(data) {
        return data
      } else {
        throw Message('ID_NOT_EXISTS')
      }
    } catch (error) {
      Log4js.error(`[action: Service one][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

  async all(fields, where, order) {
    try {
      const data = await _model.all(fields, where, order)
      return data || []
    } catch (error) {
      Log4js.error(`[action: Service all][msg: ${error.message}][file:${__filename}]`)
      throw error
    }
  }

}

module.exports.Service = Service;