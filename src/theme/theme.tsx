import React, { useMemo, useContext, createContext, memo } from 'react'

import useOriginalDeepCopy from '../hooks/useOriginalDeepCopy'

import type { ThemeProviderProps, TokensType } from './interface'
import TOKENS from './tokens-mix'

const ThemeTokensContext = createContext(TOKENS)

export const useThemeTokens = () => useContext(ThemeTokensContext)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const themeCopy = useOriginalDeepCopy(theme)
  const state = useMemo<TokensType>(
    () => ({
      ...TOKENS,
      ...themeCopy,
    }),
    [themeCopy],
  )

  return (
    <ThemeTokensContext.Provider value={state}>
      {children}
    </ThemeTokensContext.Provider>
  )
}

export default memo(ThemeProvider)
