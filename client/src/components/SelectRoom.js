import { useState, useContext, useEffect } from 'react'
import { Context } from '../context/AppContext' 
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

export default function SelectRoom() {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [createRoomShow, setCreateRoomShow] = useState(false) 
  const [roomName, setRoomName] = useState('')
  const [isRoomCreated, setIsRoomCreated] = useState(false)
  const [rooms, setRooms] = useState([])

  const { username, createRoom } = useContext(Context)

  function sendRoomName(e) {
    e.preventDefault()

    if (roomName === "") {
      setError("Room name is empty")
      return false
    }

    const status = createRoom(username, roomName)

    status.then((res) => res ? setIsRoomCreated(true) : setIsRoomCreated(false))
  
  }

  useEffect(() => {
  
    if (isRoomCreated) {
      navigate("/room")
    }
 
    api.get('/room/get-all').then(res => {
      setRooms(res.data.rooms)
    })


  }, [navigate, isRoomCreated])

  return (
    <>

    <h1>SELECT A ROOM</h1>

    <aside>
    
    {rooms.length > 0 ? rooms.map(room => (
      <a href="#sala" key={room._id}> {room.name} </a>
    )) : null}

    </aside>

    <button onClick={() => setCreateRoomShow(true)}>CREATE ROOM</button>
  

    { createRoomShow ? ( 

      <div>
        <input 
          type="text" 
          placeholder="Room name" 
          onChange={(e) => setRoomName(e.target.value)} 
        />

        <button onClick={sendRoomName}>Confirm</button>
      </div> 

    ) : null }

    {error}

    </>
  )
}


