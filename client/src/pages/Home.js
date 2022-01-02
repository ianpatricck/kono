import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  
  const navigate = useNavigate()

  function submitUser(e) {
    e.preventDefault()

    if (username === "") {
      return setError("Empty input")
    }

    localStorage.setItem("username", username)
  
    navigate("/menu")
  }

  return (
    <>
      <h1>kono chat</h1>

      <form onSubmit={submitUser} method="POST">
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Enter</button>
  
        {error}
      </form>
    </>
  )
}
