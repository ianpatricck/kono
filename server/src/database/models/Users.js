import mongoose from '../config/index.js'

const User = mongoose.model('User', {
    nickname: String,
    name: String,
    avatar: String,
    email: String,
    password: String,
})

export default User
