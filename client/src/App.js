import React from 'react'
import { ApplicationProvider } from './context/AppContext'
import Routing from './routes'

export default function App() {
  return (
    <ApplicationProvider>
      <Routing/> 
    </ApplicationProvider>
  )
}

