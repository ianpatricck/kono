/*
 * const mongoose = require('../config/index.js')

const User = mongoose.model('User', {
    nickname: String,
    name: String,
    avatar: String,
    email: String,
    password: String,
})


module.exports = User
*/

const users = [
  {
    id: 1,
    nickname: 'petrique',
    name: 'Patrick',
    avatar: 'photoname.jpg',
    email: 'patrick@mail.com',
    password: 'patrickpass'
  },

  {
    id: 2,
    nickname: 'kawa',
    name: 'Nanda',
    avatar: 'photoname.jpg',
    email: 'kawakami@mail.com',
    password: 'nandapass'
  },

  {
    id: 3,
    nickname: 'aikko',
    name: 'Ana',
    avatar: 'photoname.jpg',
    email: 'giulia@mail.com',
    password: 'anachan'
  }
]

module.exports = users
