import express from 'express'
import UserController from '../app/controllers/User.js'

const router = express.Router()

const user = new UserController()

router.get('/', user.create)

export default router
