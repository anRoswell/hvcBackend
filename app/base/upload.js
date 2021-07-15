/**
  * @name Upload
  * @type Class
  * @description Clase encargada de subir archivos al servidor
  * @author Jaime Castrillón
  */

const path = require('path')
const Log4js = require('./log4js')()
class Upload {

  static file(file, pathFile = 'images', defaultFile = 'product.png') {
    try {
      const fileName = file.name.toLowerCase().replace(/[^a-z0-9-_.]/g, '')
      const imagePath = path.resolve(global.publicPath, pathFile, fileName)
      file.mv(imagePath)
      return `/${pathFile}/${fileName}`;
    } catch (error) {
      Log4js.error(`[action: Upload file][msg: ${error.message}][file:${__filename}]`)
      return `/${pathFile}/${defaultFile}`
    }
  }

}

module.exports = Upload