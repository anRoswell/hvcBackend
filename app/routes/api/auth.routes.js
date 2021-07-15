const express = require('express')
const router = express.Router()

const { AuthController } = require('../../controllers/api/auth.controller')
const Ctrl = new AuthController()
const schema = require('../../database/schemas/auth.json')
const Schema = require('../../middlewares/schema')(schema)

router.post(`/auth/login`, [Schema.cleaner, Schema.validate], Ctrl.auth)

module.exports = router
