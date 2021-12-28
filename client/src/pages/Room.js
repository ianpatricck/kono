import { useContext, useState } from 'react'
import { Context } from '../context/AppContext.js'

export default function Room() {

  const { sendMessage } = useContext(Context)
  const [message, setMessage] = useState('')

  function handleMessage(e) {
    e.preventDefault()

    sendMessage(message)
  }

  return (
    <>

    <header>

    {/* USERS ONLINE */}

    </header>

    <section>

    {/* CHAT MESSAGES*/ }

    </section>

    <form onSubmit={ handleMessage } method="POST">
      <textarea rows="4" cols="40" onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>

    </>
  )
}
