import { createContext, useContext, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native'

export type LocalTheme = 'system' | 'dark' | 'light'

export interface ThemeContextState {
  theme: LocalTheme
  setTheme: (t: LocalTheme) => void
}

const ThemeContext = createContext<ThemeContextState>({
  theme: 'system',
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // TODO 缓存数据
  const [theme, setTheme] = useState<LocalTheme>('system')
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeDark = () => {
  const { theme } = useTheme()
  const colorScheme = useColorScheme()

  if (theme === 'system') {
    return colorScheme === 'dark'
  }

  return theme === 'dark'
}
