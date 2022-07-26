import React, { useMemo, useContext, createContext, memo } from 'react'

import type { LocaleProviderProps, Locale } from './interface'
import defaultLocale from './lang/zh_CN'

const LocaleContext = createContext(defaultLocale)

export const useLocale = () => useContext(LocaleContext)

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  locale,
}) => {
  const state = useMemo<Locale>(
    () => ({
      ...defaultLocale,
      ...locale,
    }),
    [locale],
  )

  return (
    <LocaleContext.Provider value={state}>{children}</LocaleContext.Provider>
  )
}

export default memo(LocaleProvider)
