import React, { useMemo, useContext, createContext, memo } from 'react'

import type { ThemeProviderProps, TokensType } from './interface'
import * as TOKENS from './tokens-mix'

export type { TokensType } from './interface'
export { createStyle } from './create-style'
export { createVar } from './create-var'

const ThemeTokensContext = createContext(TOKENS)

export const useThemeTokens = () => useContext(ThemeTokensContext)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const state = useMemo<TokensType>(
    () => ({
      ...TOKENS,
      ...theme,
    }),
    [theme],
  )

  return (
    <ThemeTokensContext.Provider value={state}>
      {children}
    </ThemeTokensContext.Provider>
  )
}

export default memo<typeof ThemeProvider>(ThemeProvider)
