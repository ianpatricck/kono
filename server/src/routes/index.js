import express from 'express'
import MessageController from '../app/controllers/MessageController.js'
import RoomController from '../app/controllers/RoomController.js'

const router = express.Router()

const msg = new MessageController()
const room = new RoomController()


router.post('/message/send', msg.send)
router.post('/message/delete', msg.delete)

router.post('/room/create', room.create)
router.get('/room/get-all', room.getAll)

export default router
