import rooms from './rooms.js'

class RoomController {

  getAll(_, res) {
    return res.json(rooms)
  }
}

export default RoomController
