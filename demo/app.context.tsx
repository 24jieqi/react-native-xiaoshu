import React, { createContext, useContext, useMemo, useState } from 'react'
import { Text } from 'react-native'

import { Provider, Switch, Space } from '@fruits-chain/react-native-xiaoshu'

import en_US from '../src/locale/lang/en_US'
import zh_CN from '../src/locale/lang/zh_CN'

type LocalLang = 'en' | 'zh'

interface AppContextState {
  lang: LocalLang
  setLang: (l: LocalLang) => void
}

const colors = {}

const AppContext = createContext<AppContextState>({
  lang: 'zh',
  setLang: () => {},
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [lang, setLang] = useState<LocalLang>('zh')
  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang],
  )

  return (
    <AppContext.Provider value={value}>
      <Provider theme={colors} locale={lang === 'en' ? en_US : zh_CN}>
        {children}
      </Provider>
    </AppContext.Provider>
  )
}

export const LocalLangSwitch = () => {
  const { lang, setLang } = useAppContext()

  return (
    <Space direction="horizontal" align="center">
      <Text>en</Text>
      <Switch
        activeValue="zh"
        inactiveValue="en"
        inactiveColor="#ddd"
        value={lang}
        onChange={setLang}
      />
      <Text>zh</Text>
    </Space>
  )
}
