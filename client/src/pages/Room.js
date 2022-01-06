import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client' 
import { SendingMessage, ReceiveMessage } from '../components'
import { Chat, RoomStyle, SendMessageForm } from '../styles/components/'

const socket = io.connect("http://localhost:4000")

export default function Room() {

  const { slug } = useParams()
  const username = localStorage.getItem("username")
  const [message, setMessage] = useState('')

  const [sendingMessage, setSendingMessage] = useState({})
  const [receiveContent, setReceiveContent] = useState({})

  useEffect(() => {
    socket.emit("join_room", slug)

    socket.on("receive_content", (data) => {
      setReceiveContent(data)
    })

  }, [slug])

  async function sendMessage(e) {
    e.preventDefault()

    if (message !== "") {
      const messageData = {
        room: slug,
        from: username,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }

      setSendingMessage(messageData)      
      await socket.emit("send_message", messageData)
    }  
  }


  return (
    <RoomStyle>

      <header>
        <span>Patrick</span>
        <span>Crowzada</span>
        <span>ElCris</span>
        <span>Konobi</span>
        <span>Triz</span>
        <span>Allenzita</span>
        <span>Joyce</span>
        <span>zAthenaz</span>
      </header>

      <Chat>
        <SendingMessage content={sendingMessage} />      
        <ReceiveMessage content={receiveContent} />
      
        <SendMessageForm onSubmit={ sendMessage } method="POST">
          <textarea rows="4" cols="40" onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Send</button>
        </SendMessageForm>
      </Chat>
    </RoomStyle>
  )
}
