import React from 'react'
import { UserProvider } from './context/UserContext'
import Routing from './routes'

export default function App() {
  return (
    <UserProvider>
      <Routing/> 
    </UserProvider>
  )
}

