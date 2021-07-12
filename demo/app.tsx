import React from 'react'
import { Provider } from 'react-native-xiaoshu'

import Routes from './routes'

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}

export default App
