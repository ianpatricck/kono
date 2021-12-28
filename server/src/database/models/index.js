import mongoose from '../config/index.js'

const Message = mongoose.model('Message', {
    user: String,
    message_content: String 
})

const Room = mongoose.model('Room', {
    created_by: String,
    name: String 
})


export { Message, Room }
