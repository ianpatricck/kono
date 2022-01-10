import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import {
  Home,
  Room,
  Menu,
  NotFound
} from './pages'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/room/:slug" element={<Room />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  )
}

