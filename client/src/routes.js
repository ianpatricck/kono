import { useContext, useEffect, useState } from 'react'
import { Context } from './context/AppContext'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import {
  Home,
  Room
} from './pages'

export default function Routing() {
  
  const { isUser, setIsUser, setUsername } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const username = localStorage.getItem('user') 

    if (username) {
      setIsUser(true) 
      setUsername(username)
    }

    setLoading(false) 
  
  }, [setLoading, setIsUser, setUsername])

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/room" element={isUser ? <Room /> : <Navigate to="/" />} /> 
      </Routes>
    </Router>
  )
}

