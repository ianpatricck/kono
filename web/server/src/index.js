import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET, POST']
  } 
})

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    // send message content
  })

})

server.listen(4000, () => console.log("Server running on port 4000"))
