import mongoose from '../config/index.js'

const Room = mongoose.model('Room', {
    created_by: String,
    name: String,
    room_id: String
})


export { Room }
