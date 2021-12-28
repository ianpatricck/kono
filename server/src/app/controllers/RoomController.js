import { Room } from '../../database/models/index.js'

class RoomController {
  constructor() {}

  create(req, res) {
    
    const { username, roomName } = req.body

    const CreateRoom = new Room({
      
      created_by: username,
      name: roomName
    
    }).save().then(() => {
      
      return res.json({
        status: true
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

      console.log(allRooms)
    })
  }
}

export default RoomController
