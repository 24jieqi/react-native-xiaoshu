import React, { memo } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Locale from '../locale'
import Portal from '../portal'
import Theme from '../theme'

import type { ProviderProps } from './interface'

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<React.PropsWithChildren<ProviderProps>> = ({
  children,
  theme,
  locale,
}) => {
  return (
    <SafeAreaProvider>
      <Locale locale={locale}>
        <Theme theme={theme}>
          <Portal.Host>{children}</Portal.Host>
        </Theme>
      </Locale>
    </SafeAreaProvider>
  )
}

export default memo(Provider)
