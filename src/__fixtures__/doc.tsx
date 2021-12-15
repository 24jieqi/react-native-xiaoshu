import React from 'react'
import { View } from 'react-native'
import { Provider } from '@fruits-chain/react-native-xiaoshu'

const Doc: React.FC = ({ children }) => {
  return (
    <View style={{ minHeight: '100%', width: '100%' }}>
      <Provider>{children}</Provider>
    </View>
  )
}

export default Doc
