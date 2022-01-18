import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

import { 
  RoomLink, 
  MenuDisplay, 
  LoadingRooms, 
  RoomContent 
} from '../styles/components'

export default function Menu() {

  const [rooms, setRooms] = useState([])
  const navigate = useNavigate() 

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
    <MenuDisplay>
    
      <h1>SELECT ROOM</h1>
 
          <RoomContent>
            {!loading ? rooms.map((room, index) => (

              (
                <RoomLink to={`/room/${room.slug}`} key={index}>
                    {room.room_name}
                </RoomLink>
              )

            )) : (
              <LoadingRooms>
                <h2>Loading rooms...</h2>
              </LoadingRooms>

            )}

        </RoomContent>
    </MenuDisplay>
  )
}
