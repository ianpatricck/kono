import { useContext } from 'react'
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/room" element={<Room />} /> 
      </Routes>
    </Router>
  )
}

