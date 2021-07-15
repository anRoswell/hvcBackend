const express = require('express')
const router = express.Router()

const { PatientController } = require('../../controllers/api/patient.controller')
const Ctrl = new PatientController()
const JWT = require('../../middlewares/jwt')
const schema = require('../../database/schemas/patient.json')
const Schema = require('../../middlewares/schema')(schema)

router.get(`/patients`, [JWT.isAuth], Ctrl.all)
router.get(`/atentionsByPatient/:id`, [JWT.isAuth], Ctrl.getAtentionsByPatient)
//router.get(`/patients`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.all)

module.exports = router
