const express = require('express')
const router = express.Router()

const { AtencionController } = require('../../controllers/api/atencion.controller')
const Ctrl = new AtencionController()
const JWT = require('../../middlewares/jwt')
const schema = require('../../database/schemas/atencion.json')
const Schema = require('../../middlewares/schema')(schema)

router.post(`/atencion`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.atencion)

module.exports = router
