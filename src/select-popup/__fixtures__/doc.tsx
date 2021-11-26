import React from 'react'
import { Provider } from 'react-native-xiaoshu'
import Basic from './basic'

const OverlayDemo: React.FC = () => {
  return (
    <Provider>
      <Basic />
    </Provider>
  )
}

export default OverlayDemo
