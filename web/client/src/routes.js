import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

import {
    Home,
    Room,
    NotFound
} from './pages'

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/room" element={<Room />} /> 
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </Router>
    )
}

