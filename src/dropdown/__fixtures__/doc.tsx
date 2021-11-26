import React from 'react'
import { Provider } from 'react-native-xiaoshu'
import Basic from './basic'

const BasicDialogDoc: React.FC = () => {
  return (
    <Provider>
      <Basic />
    </Provider>
  )
}

export default BasicDialogDoc
