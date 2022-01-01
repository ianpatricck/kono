import express from 'express'
import RoomController from './RoomController.js'

const router = express.Router()

const room = new RoomController()

router.post('/room/create', room.create)
router.get('/room/get-all', room.getAll)

export default router
