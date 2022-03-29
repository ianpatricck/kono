import { SendMessageForm } from '../styles/components'

import { useState, useContext } from 'react'
import { Context } from '../context/AppContext'

function SendMessageContent({ username }) {

    const { socket } = useContext(Context)
    const [message, setMessage] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        e.target.reset()

        if (message !== "") {
            const messageData = {
                from: username,
                message: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }

            await socket.emit("send_message", messageData) 
        }
    }

    return (
        <SendMessageForm onSubmit={ sendMessage } method="POST">
            <div>
                <input placeholder="Type hello :D" onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </div>
        </SendMessageForm>

    )
}

export default SendMessageContent
