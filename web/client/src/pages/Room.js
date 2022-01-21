import { useContext } from 'react'
import { Chat, RoomDisplay } from '../styles/components/'
import { Context } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import SendMessageContent from '../components/SendMessageContent'
import ReceiveMessageContent from '../components/ReceiveMessageContent'
import { MessageContainer } from '../styles/components'

export default function Room() {

  const { messageContent } = useContext(Context)
  const username = localStorage.getItem('username')
  const navigate = useNavigate() 

  function disconnect() { 
    localStorage.removeItem("username")
    navigate('/')
    
    window.location.reload()
  }

  return (
    <RoomDisplay>

      <ReceiveMessageContent />

      <header>
        <button onClick={disconnect}>Disconnect</button>
      </header>

      <Chat>
        <nav>
    
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
              
                <p>{content.message}</p>
              </MessageContainer>
            )
          })}

        </nav>
    
        <SendMessageContent username={username} />
      </Chat>
    </RoomDisplay>
  )
}
