const express = require('express')
const UserController = require('../app/controllers/User.js')

const router = express.Router()

const user = new UserController()

router.post('/create', user.create)
router.post('/auth', user.auth)
router.post('/update', user.update)
router.post('/delete', user.delete)

module.exports = router
