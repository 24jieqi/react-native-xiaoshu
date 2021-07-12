import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Theme from '../theme'
import Portal from '../portal'
import type { ProviderProps } from './interface'

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<ProviderProps> = ({ children, theme }) => {
  return (
    <SafeAreaProvider>
      <Theme theme={theme}>
        <Portal.Host>{children}</Portal.Host>
      </Theme>
    </SafeAreaProvider>
  )
}

export default Provider
