import React from 'react'

import { Provider } from '@fruits-chain/react-native-xiaoshu'

import en_US from '../src/locale/lang/en_US'

import Routes from './routes'

const colors = {}

const App = () => {
  return (
    <Provider theme={colors} locale={en_US}>
      <Routes />
    </Provider>
  )
}

export default App
