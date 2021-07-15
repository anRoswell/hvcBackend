const log4js = require('log4js')
const moment = require('moment')
const path = require('path')

const logsPath = `${path.dirname(path.join(__dirname, '../'))}/logs/`
const filePath = `${logsPath}${moment().format('YYYYMMDD')}.log`

log4js.configure({
  appenders:{
    ecommerce: {
      type: 'file',
      filename: filePath
    }
  },
  categories: {
    default: {
      appenders: ['ecommerce'],
      level: 'info'
    }
  }
})

module.exports = () => log4js.getLogger('ecommerce')