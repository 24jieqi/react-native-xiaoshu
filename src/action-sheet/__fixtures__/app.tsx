import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'
import Basic from './basic'

const App: React.FC = ({ children }) => {
  return <Provider>{children}</Provider>
}

const OverlayDemo: React.FC = () => {
  return (
    <App>
      <Basic />
    </App>
  )
}
export default OverlayDemo
