import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'
import Basic from './basic'

const FieldDemo: React.FC = () => {
  return (
    <Provider>
      <Basic />
    </Provider>
  )
}
export default FieldDemo
