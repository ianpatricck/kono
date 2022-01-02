import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

export default function Menu() {

  const [rooms, setRooms] = useState([])

  const navigate = useNavigate()

  /*
   * Loading que espera a redenrização do array das salas (rooms)
   *
   */

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      
    const username = localStorage.getItem("username")

    if (username) {
    
      api.get("/room/get-all").then(res => { 
        setRooms(res.data)
        setLoading(false)
      })

    } else {
      navigate("/")
    }
 
  }, [navigate])

  
  return (
    <>
      <h2>SELECT ROOM</h2>

        {!loading ? rooms.map((room, index) => (
     
          (<Link to={`/room/${room.slug}`} key={index}>{room.room_name}</Link>) 
     
        )) : (<h1>Loading</h1>)}
 
    </>
  )
}
