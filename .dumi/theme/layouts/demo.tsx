import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'

import './demo.less'

const MobileDemoLayout: React.FC = ({ children }) => {
  return (
    <div className="xiaoshu-mobile-demo">
      <Provider>{children}</Provider>
    </div>
  )
}

export default MobileDemoLayout
