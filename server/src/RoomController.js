import bcrypt from 'bcrypt'
import rooms from './rooms.js'

class RoomController {

  create(req, res) {

    const { username, roomName } = req.body

    bcrypt.hash(toString(new Date), 10, (err, hash) => {

      const id = hash.slice(hash.length - 10)       

      console.log(id) 
    })

  }

  getAll(_, res) {
    return res.json(rooms) 
  }
}

export default RoomController
