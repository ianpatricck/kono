import express from 'express'
import cors from 'cors'
import router from './routes.js'
import http from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', router)

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET, POST']
  } 
})

io.on("connection", (socket) => {

  socket.on("join_room", (data) => {
    socket.join(data)
  })

  socket.on("send_message", (data) => {
    socket.to(data.room).emit('receive_message', data)
  })

})

server.listen(4000, () => console.log("Server running on port 4000"))
