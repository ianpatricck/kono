import { Room } from '../../database/models/index.js'
import bcrypt from 'bcrypt'

class RoomController {
  constructor() {}

  create(req, res) {

    const { username, roomName } = req.body

    bcrypt.hash(toString(new Date), 10, (err, hash) => {

      const id = hash.slice(hash.length - 10)       

      const CreateRoom = new Room({

        created_by: username,
        name: roomName,
        room_id: id

      }).save().then(() => {

        return res.json({
          status: true
        })

      })

    })

  }

  getAll(_, res) {

    Room.find({}, (err, allRooms) => {
      if (err) {
        throw err

        return res.json({
          status: false,
          msg: "Failed to load rooms"
        })
      }

      return res.json({ rooms: allRooms })
    })
  }
}

export default RoomController
