import { createContext, useContext, useMemo, useState } from 'react'

export type LocalLang = 'en' | 'zh'

export interface LangContextState {
  lang: LocalLang
  setLang: (l: LocalLang) => void
}

const LangContext = createContext<LangContextState>({
  lang: 'zh',
  setLang: () => {},
})

export const useLang = () => useContext(LangContext)

export const LangProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // TODO 缓存数据
  const [lang, setLang] = useState<LocalLang>('zh')
  const value = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
