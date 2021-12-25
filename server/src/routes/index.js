import express from 'express'
import MessageController from '../app/controllers/MessageController.js'

const router = express.Router()

const msg = new MessageController()

router.post('/message/send', msg.send)
router.post('/message/delete', msg.delete)

export default router
