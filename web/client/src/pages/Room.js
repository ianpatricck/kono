import { useContext, useEffect } from 'react'
import { Chat, RoomDisplay } from '../styles/components/'
import { Context } from '../context/AppContext'
import { useParams, useNavigate } from 'react-router-dom'

import SendMessageContent from '../components/SendMessageContent'
import ReceiveMessageContent from '../components/ReceiveMessageContent'

import { MessageContainer } from '../styles/components'

export default function Room() {

  const { messageContent,  socket } = useContext(Context)

  const username = localStorage.getItem('username')
  const { slug } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    socket.emit("join_room", slug) 
  }, [slug, socket])

  return (
    <RoomDisplay>

      <ReceiveMessageContent slug={slug} />

      <header>
        <button onClick={() => navigate('/menu')}>Disconnect</button>
      </header>

      <Chat> 
        {messageContent.map((content, index) => {
          return (
            <MessageContainer key={index}>
              <div>
                {content.from === username ? (
                  <span id="my_user">
                    {content.from}
                  </span>) : (
                    <span id="other_user">
                      {content.from}
                    </span>)}
            
                <small>{content.time}</small>
              </div>
            
              <p>
                {content.message}
              </p>
            </MessageContainer>
          )
        })}

        <SendMessageContent slug={slug} username={username} />
      </Chat>
    </RoomDisplay>
  )
}
