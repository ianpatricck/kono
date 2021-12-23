import React, { createContext, useState } from 'react'
import { api } from '../api'

const Context = createContext()

function UserProvider({ children }) {  

  async function insertUsername({ username }) {
    console.log(username) 
  }
 
  return (
    <Context.Provider value={{ insertUsername }}>
    { children }
    </Context.Provider>
  )
}

export { Context, UserProvider }
