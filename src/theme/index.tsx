import React, { useMemo, useContext, createContext, memo } from 'react'

import type { ThemeProviderProps, ThemeVarType } from './interface'
import * as defaultVar from './default-var'

export type { ThemeVarType } from './interface'

const ThemeVarContext = createContext({} as ThemeVarType)

export const useTheme = () => useContext(ThemeVarContext)

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const state = useMemo<ThemeVarType>(
    () => ({
      ...defaultVar,
      ...theme,
    }),
    [theme],
  )

  return (
    <ThemeVarContext.Provider value={state}>
      {children}
    </ThemeVarContext.Provider>
  )
}

export default memo<typeof ThemeProvider>(ThemeProvider)
