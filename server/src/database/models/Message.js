import mongoose from '../config/index.js'

const Message = mongoose.model('Message', {
    user: String,
    message_content: String 
})

export default Message

