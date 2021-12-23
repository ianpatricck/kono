import { useState, useContext } from 'react'
import { Context } from '../context/UserContext'

export default function Home() {

  const [username, setUsername] = useState('')
  const { insertUsername } = useContext(Context)

  function submitUsername(e) {
    e.preventDefault()
    insertUsername({ username })
  }

  return (
    <>
    <form onSubmit={submitUsername} method="POST">
      <input
        type="text"
        placeholder="Username"
        maxlentgh="30"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
 
      <button type="submit">Enter</button>
    </form>
    </>
  )
}
