import type { PropsWithChildren } from 'react'

import type TOKENS from './tokens-mix'

/** tokens */
export type TokensType = typeof TOKENS

/** 外界可以参与修改的变量 */
export type StyleVar = Partial<TokensType>

/** 默认初始化状态 */
export interface ThemeProviderProps extends PropsWithChildren<{}> {
  theme?: StyleVar & {
    [key in string]: any
  }
}
