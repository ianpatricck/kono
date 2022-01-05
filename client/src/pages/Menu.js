import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

import { RoomLink, SelectRoomTitle, MenuSection, LoadingRooms, RoomContent } from '../styles/components'

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
    <MenuSection>
    
      <SelectRoomTitle>Select room</SelectRoomTitle>
 
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
    </MenuSection>
  )
}
