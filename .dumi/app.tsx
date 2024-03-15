import React from 'react'
import { Provider } from '@fruits-chain/react-native-xiaoshu'

// const Root = ({ children }) => {
//   return (
//     <div id="xiaoshu-mobile-demo">
//       <Provider>{children}</Provider>
//     </div>
//   )
// }

export function rootContainer(container: React.ReactNode) {
  return React.createElement(Provider, null, container)
}
