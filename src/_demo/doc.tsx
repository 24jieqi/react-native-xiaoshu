import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-native-xiaoshu'

const Doc: React.FC = ({ children }) => {
  return (
    <View style={{ minHeight: 608 }}>
      <Provider>{children}</Provider>
    </View>
  )
}

export default Doc
