import { Provider, Theme } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useLang } from '~/contexts/lang'
import { useThemeDark } from '~/contexts/theme'

import en_US from '../../src/locale/lang/en_US'
import zh_CN from '../../src/locale/lang/zh_CN'

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const isThemeDark = useThemeDark()
  const { lang } = useLang()

  return (
    <SafeAreaProvider>
      <Provider
        theme={isThemeDark ? Theme.dark : undefined}
        locale={lang === 'en' ? en_US : zh_CN}>
        {children}
      </Provider>
    </SafeAreaProvider>
  )
}
