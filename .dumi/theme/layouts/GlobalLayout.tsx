import { Provider, Theme } from '@fruits-chain/react-native-xiaoshu'
import { useOutlet, usePrefersColor } from 'dumi'
import React from 'react'

const GlobalLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const outlet = useOutlet()
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor()

  return (
    <Provider theme={color === 'dark' ? Theme.dark : undefined}>
      {outlet}
    </Provider>
  )
}

export default GlobalLayout
