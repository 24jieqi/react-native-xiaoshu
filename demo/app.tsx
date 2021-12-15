import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'

import Routes from './routes'

const App = () => {
  return (
    <Provider>
      <Routes />
    </Provider>
  )
}

export default App
