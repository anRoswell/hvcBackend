const express = require('express')
const router = express.Router()

const { CategoryController } = require('../../controllers/api/category.controller')
const Ctrl = new CategoryController()
const route = 'web/categories'

router.get(`/${route}/slug/:slug`, Ctrl.slugById).get(`/${route}/list/:list`, Ctrl.list)

module.exports = router
