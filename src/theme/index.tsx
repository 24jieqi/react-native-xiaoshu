import React, { useMemo, useContext, createContext, memo } from 'react'

import * as defaultVar from './default-var'
import type { ThemeProviderProps, ThemeVarType } from './interface'

export type { ThemeVarType } from './interface'
export { widthStyle } from './width-style'

const ThemeVarContext = createContext(defaultVar as ThemeVarType)

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
