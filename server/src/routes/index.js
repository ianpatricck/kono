const express = require('express')
const MessageController = require('../app/controllers/MessageController.js')

const router = express.Router()

const msg = new MessageController()

router.post('/message/send', msg.send)
router.post('/message/delete', msg.delete)

module.exports = router
