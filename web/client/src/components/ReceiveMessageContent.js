import { useEffect, useContext } from 'react'
import { Context } from '../context/AppContext'

function ReceiveMessageContent() {

  const { socket, setMessageContent } = useContext(Context)
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageContent((prev) => [...prev, data])
    })

  }, [socket, setMessageContent])

  return (
    <></>
  )
}

export default ReceiveMessageContent
