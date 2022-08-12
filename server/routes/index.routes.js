const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemById,
	getAllItems,
} = require('../controllers/items.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

// router.route('/shopping_list/:id').delete(deleteItemById)

module.exports = router
