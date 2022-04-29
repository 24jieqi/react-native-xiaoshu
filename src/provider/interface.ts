import type { LocaleProviderProps } from '../locale/interface'
import type { ThemeProviderProps } from '../theme/interface'

export interface ProviderProps
  extends ThemeProviderProps,
    LocaleProviderProps {}
