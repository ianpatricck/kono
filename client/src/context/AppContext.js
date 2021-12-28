import React, { createContext, useState } from 'react'
import { api } from '../api'

const Context = createContext()

function ApplicationProvider({ children }) {  

  const [isUser, setIsUser] = useState(false)
  const [username, setUsername] = useState('') 

  async function sendMessage(message) {
    console.log(message) 
  }

  async function createRoom(username, roomName) {

    username = JSON.parse(username)

    const { data } = await api.post('/room/create', { username, roomName }) 

    return data.status ? true : false
  }

 
  return (
    <Context.Provider value={
      { 
        setIsUser, 
        isUser,
        createRoom,
        sendMessage, 
        username, 
        setUsername 
      }
    }>

      { children }
    
    </Context.Provider>
  )
}

export { Context, ApplicationProvider }
