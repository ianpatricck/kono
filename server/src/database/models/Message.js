const mongoose = require('../config/index.js')

const Message = mongoose.model('Message', {
    user: String,
    message_content: String 
})

module.exports = Message

