const auth = require('./api/auth.routes')
const profiles = require('./api/profile.routes')
const users = require('./api/user.routes')
const menus = require('./api/menu.routes')
const atenciones = require('./api/atencion.routes')
const patients = require('./api/patient.routes')

module.exports = [auth, profiles, users, atenciones, patients]
