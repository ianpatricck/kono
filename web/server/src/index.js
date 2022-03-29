import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)

/*
 * Configure server instance with socket.io and with CORS
 *
 */

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET, POST']
    } 
})

/*
 * Event that listens until a message is received 
 * and then sent back
 *
 */

io.on("connection", (socket) => {
    socket.on('send_message', (messageData) => {
        io.emit('receive_message', messageData)
    }) 
})

server.listen(4000, () => console.log("Server running on port 4000"))
