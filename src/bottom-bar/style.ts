import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    bottom_bar_background_color: TOKENS.white,
    bottom_bar_height: 50,
  }
}

export type BottomBar = ReturnType<typeof varCreator>
