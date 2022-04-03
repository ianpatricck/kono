import React, { createContext, useState } from 'react'
import { io } from 'socket.io-client' 

const Context = createContext()

const socket = io.connect("http://localhost:4000")

function ApplicationProvider({ children }) { 

    const [messageContent, setMessageContent] = useState([])

    return (
        <Context.Provider value={
            { 
                socket, 
                messageContent, 
                setMessageContent,
            }
            }>

            { children }

        </Context.Provider>
    )
}

export { Context, ApplicationProvider }
