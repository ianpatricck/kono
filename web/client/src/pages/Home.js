import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { HomeDisplay, ErrorMessage } from '../styles/components'

export default function Home() {

  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  
  const navigate = useNavigate()

  function submitUser(e) {
    e.preventDefault()

    if (username === "") {
      return setError("Empty username")
    }

    localStorage.setItem("username", username)
  
    navigate("/room")
  }

  return (
    <>
      <HomeDisplay onSubmit={submitUser} method="POST">
        <h1>kono chat</h1>

        <div>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <button type="submit">Enter</button>
        </div>

        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </HomeDisplay>
    </>
  )
}
