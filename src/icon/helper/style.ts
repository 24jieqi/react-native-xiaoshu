import type { TokensType } from '../../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    icon_color: TOKENS.gray_7,
    icon_disabled_color: TOKENS.gray_5,
  }
}
