import React from 'react'

import { Provider } from '@fruits-chain/react-native-xiaoshu'

import Routes from './routes'

const colors = {}

const App = () => {
  return (
    <Provider theme={colors}>
      <Routes />
    </Provider>
  )
}

export default App
