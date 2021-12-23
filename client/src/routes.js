import React, { useContext } from 'react'
import { Context } from './context/UserContext'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import {
  Home,
  Private,
  Room
} from './pages'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/private" element={<Private />} />    
        <Route path="/room" element={<Room />} /> 
    </Routes>
    </Router>
  )
}



