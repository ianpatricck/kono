import React, { createContext } from 'react'

const Context = createContext()

function ApplicationProvider({ children }) { 
 
  return (
    <Context.Provider value={{ }}>

      { children }
    
    </Context.Provider>
  )
}

export { Context, ApplicationProvider }
