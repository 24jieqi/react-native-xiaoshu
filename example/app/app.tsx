import React from 'react'

import { LangProvider } from '~/contexts/lang'
import { ThemeProvider } from '~/contexts/theme'

import { AppProvider } from './app.provider'
import Routes from './routes'

const App = () => {
  return (
    <LangProvider>
      <ThemeProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </ThemeProvider>
    </LangProvider>
  )
}

export default App
