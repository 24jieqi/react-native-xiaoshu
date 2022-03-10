import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    space_gap_vertical: TOKENS.space_2,
    space_gap_horizontal: TOKENS.space_2,
  }
}
