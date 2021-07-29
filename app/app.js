// Configuración del servidor NodeJS

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const fileUpload = require('express-fileupload')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(helmet())
app.use(
	cors({
		exposedHeaders: ['Authorization'],
	}),
)
app.use(compression())
app.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 } }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

const publicPath = path.resolve(__dirname, '..', 'public')
app.use(express.static(publicPath))

global.publicPath = publicPath

app.disable('x-powered-by')

app.use((error, req, res, next) => {
	if (error) {
		res.status(422).json({
			type: 'error',
			message: 'request error',
		})
	} else {
		next()
	}
})

// Ruta de la carpeta pública
const pictures = path.resolve(__dirname, 'uploads')
app.use(express.static(pictures))
//global.publicPath = dashBoard

app.get('/', (req, res) => {
	res.status(403).json({
		type: 'error',
		message: 'error home',
	})
})

// Nuevas rutas de la API
const routes = require('./routes')
app.use('/api/v1.1/', routes)

// const webRoutes = require('./routing/web')
// app.use('/web/v1.0/', webRoutes)

app.all('*', (req, res) => {
	res.status(403).json({
		type: 'error',
		message: 'error ruta',
	})
})

module.exports = app
