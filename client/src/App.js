import React from 'react'
import { ApplicationProvider } from './context/AppContext'
import { lightTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles.js'
import Routing from './routes'


export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <ApplicationProvider>
        <Routing/> 
      </ApplicationProvider>
    </ThemeProvider>
  )
}

