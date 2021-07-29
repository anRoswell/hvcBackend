const express = require('express')
const router = express.Router()

const { ProductController } = require('../../controllers/api/product.controller')
const Ctrl = new ProductController()
const route = 'web/products'

router.get(`/${route}/promotion`, Ctrl.promotion).get(`/${route}/newproducts`, Ctrl.newProduct)

module.exports = router
