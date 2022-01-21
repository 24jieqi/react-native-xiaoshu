import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'
import Basic from './basic'

const TabBarDemo: React.FC = () => {
  return (
    <Provider>
      <Basic />
    </Provider>
  )
}

export default TabBarDemo
