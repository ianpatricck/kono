import { useState, useContext } from 'react'
import { Context } from '../context/AppContext' 

import SelectRoom from '../components/SelectRoom'

export default function Home() {
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')

  const { isUser } = useContext(Context)

  function submitUsername(e) {
    e.preventDefault()

    if (username === "") {
      setError("Username is empty")
      return false
    }

    localStorage.setItem('user', JSON.stringify(username))
  
    window.location.reload()
  }
 
  return (
    <>
    
    { isUser ? (
    
      <SelectRoom />
        
    ) : (

      <div>
        <form onSubmit={submitUsername} method="POST">
          <input
            type="text"
            placeholder="Username"
            maxlentgh="30"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
     
          <button type="submit">Enter</button>

          {error}
        </form>
      </div>

      ) }

    </>
  )
}
