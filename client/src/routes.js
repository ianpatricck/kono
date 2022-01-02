import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import {
  Home,
  Room,
  Menu
} from './pages'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/room/:slug" element={<Room />} /> 
        <Route path="/menu" element={<Menu />} /> 
      </Routes>
    </Router>
  )
}

