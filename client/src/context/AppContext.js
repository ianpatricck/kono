import React, { createContext, useState } from 'react'
import { api } from '../api'

const Context = createContext()

function ApplicationProvider({ children }) { 
 
  return (
    <Context.Provider value={
      { 
         
      }
    }>

      { children }
    
    </Context.Provider>
  )
}

export { Context, ApplicationProvider }
